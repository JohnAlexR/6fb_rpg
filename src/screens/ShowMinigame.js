import React, { useState, useEffect, useRef } from "react";
import kaplay from "kaplay";

const ShowMinigame = ({ selectMinigameAnswer }) => {
  const gameContainerRef = useRef(null);
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("start");
  const keys = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });

  useEffect(() => {
    if (!game) {
      const gameInstance = kaplay({
        width: 400,
        height: 220,
        scale: 1,
        font: "press-start",
        root: gameContainerRef.current,
        background: [0, 0, 0],
        stretch: false,
      });
      setGame(gameInstance);
      const stopGame = setTimeout(() => {
        gameInstance.quit();
        setGameStatus("end");
      }, 60000);
      return () => clearTimeout(stopGame);
    }
  }, []);

  useEffect(() => {
    if (game && !player) {
      game.loadSprite("star", "/stariconsmall.png");
      const bean = game.add([
        game.sprite("star"),
        game.pos(175, 0),
        game.area(),
        game.body(),
        "player",
      ]);
      setPlayer(bean);

      game.onCollide("note", "player", () => {
        if (gameStatus === "start") {
          setScore((prev) => prev + 10);
        }
      });

      game.onCollide("bullet", "player", () => {
        if (gameStatus === "start") {
          game.shake();
          setScore((prev) => prev - 25);
        }
      });

      //   game.onCollide("bullet", "note", (action) => {
      //     console.log(action);
      //     action.destroy();
      //   });

      const borderBottom = game.add([
        game.rect(255, 5),
        game.outline(1),
        game.area(),
        game.pos(90, game.height() - 10),
        game.area(),
        game.body({ isStatic: true }),
      ]);

      const borderTop = game.add([
        game.rect(250, 5),
        game.outline(1),
        game.area(),
        game.pos(90, game.height() - 220),
        game.area(),
        game.body({ isStatic: true }),
      ]);

      const borderLeft = game.add([
        game.rect(5, 220),
        game.outline(1),
        game.area(),
        game.pos(90, -10),
        game.area(),
        game.body({ isStatic: true }),
      ]);

      const borderRight = game.add([
        game.rect(5, 220),
        game.outline(1),
        game.area(),
        game.pos(340, -10),
        game.area(),
        game.body({ isStatic: true }),
      ]);
    }
  }, [game, player]);

  useEffect(() => {
    if (game && player) {
      let speed = 80;
      let frequency = 6;
      function spawnNote() {
        game.add([
          game.rect(24, 24),
          game.area(),
          game.outline(4),
          game.pos(game.width(), game.rand(10, 180)),
          game.anchor("botleft"),
          game.color(220, 20, 60),
          game.move(game.LEFT, speed),
          "bullet",
        ]);
        game.wait(game.rand(0.5, frequency), () => {
          if (gameStatus === "start") {
            spawnNote();
          } else {
            return;
          }
        });
      }
      const bulletDelay = setTimeout(() => {
        spawnNote();
      }, 10000);
      const bulletSpeed = setTimeout(() => {
        speed = 130;
      }, 20000);
      const bulletSpeed2 = setTimeout(() => {
        speed = 180;
      }, 30000);
      const bulletFreq = setTimeout(() => {
        frequency = 3;
      }, 40000);
      const bulletFreq2 = setTimeout(() => {
        frequency = 1.5;
      }, 45000);
      return () => {
        clearTimeout(bulletDelay);
        clearTimeout(bulletSpeed);
        clearTimeout(bulletSpeed2);
        clearTimeout(bulletFreq);
        clearTimeout(bulletFreq2);
      };
    }
  }, [game, player]);

  useEffect(() => {
    if (game && player) {
      function spawnNote() {
        game.add([
          game.rect(24, 32),
          game.area(),
          game.outline(4),
          game.pos(game.width(), game.rand(10, 180)),
          game.anchor("botleft"),
          game.color(0, 225, 0),
          game.move(game.LEFT, 120),
          "note",
        ]);
        game.wait(game.rand(0.5, 2), () => {
          if (gameStatus === "start") {
            spawnNote();
          } else {
            return;
          }
        });
      }
      spawnNote();
    }
  }, [game, player]);

  useEffect(() => {
    if (game && player) {
      const handleKeyDown = (event) => {
        if (keys.current.hasOwnProperty(event.key)) {
          keys.current[event.key] = true;
        }
      };

      const handleKeyUp = (event) => {
        if (keys.current.hasOwnProperty(event.key)) {
          keys.current[event.key] = false;
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [game, player]);

  useEffect(() => {
    if (game && player) {
      const speed = 15000;
      let lastTime = performance.now();

      const updatePlayerPosition = () => {
        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        let dx = 0;
        let dy = 0;

        if (keys.current.ArrowUp) dy -= speed * deltaTime;
        if (keys.current.ArrowDown) dy += speed * deltaTime;
        if (keys.current.ArrowLeft) dx -= speed * deltaTime;
        if (keys.current.ArrowRight) dx += speed * deltaTime;

        player.move(dx, dy);
        requestAnimationFrame(updatePlayerPosition);
      };

      updatePlayerPosition();
    }
  }, [game, player]);

  return (
    <div className="h-full w-full justify-center items-center flex flex-row">
      {gameStatus === "start" && (
        <div className="flex-row flex items-center h-full">
          <p className="font-press-start text-white pt-4">{`score: ${score}`}</p>
          <div id="canvas" ref={gameContainerRef}></div>
        </div>
      )}
      {gameStatus === "end" && (
        <div>
          <p className="text-white font-press-start">You scored:</p>
          <p className="text-white font-press-start">{score}</p>
          <div className="text-center mt-10">
            <button
              onClick={() => {
                if (score > 0) {
                  selectMinigameAnswer("goodShow", "30a", score);
                } else {
                  selectMinigameAnswer("badShow", "30b", score);
                }
              }}
            >
              <p className="text-white font-press-start">continue</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMinigame;
