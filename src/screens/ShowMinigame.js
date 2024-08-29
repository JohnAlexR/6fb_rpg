import React, { useState, useEffect, useRef } from "react";
import kaplay from "kaplay";

const ShowMinigame = () => {
  const gameContainerRef = useRef(null);
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
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
      ]);
      setPlayer(bean);

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
      const speed = 20000;
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
      <div id="canvas" ref={gameContainerRef}></div>
    </div>
  );
};

export default ShowMinigame;
