import React, { useEffect, useRef } from "react";

const HeroTitle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const txt = "ASTRA MEDIA";
    const txtH = 100;
    const font = "sans-serif";
    const bg = "#EAEAEA";
    const rayColor1 = "#3C3C3C";
    const rayColor2 = "#3300FF";
    const fade = 300;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var cw = (canvas.width = window.innerWidth);
    var ch = (canvas.height = window.innerHeight);
    const w2 = cw / 2;
    const h2 = ch / 2;
    const pi = Math.PI;
    const pi2 = pi * 0.5;

    const txtCanvas = document.createElement("canvas");
    const txtCtx = txtCanvas.getContext("2d");
    txtCtx.font = `${txtH}px ${font}`;
    txtCtx.textBaseline = "middle";
    const txtW = Math.floor(txtCtx.measureText(txt).width);
    txtCanvas.width = txtW;
    txtCanvas.height = txtH * 1.5;

    const gradient = ctx.createRadialGradient(w2, h2, 0, w2, h2, txtW);
    gradient.addColorStop(0, rayColor2);
    gradient.addColorStop(1, rayColor1);
    ctx.strokeStyle = gradient;

    txtCtx.fillStyle = gradient;
    txtCtx.font = `${txtH}px ${font}`;
    txtCtx.fillText(txt, 0, txtH * 0.5);

    const bufferCanvas = document.createElement("canvas");
    bufferCanvas.width = txtW;
    bufferCanvas.height = txtH;
    const buffer = bufferCanvas.getContext("2d");

    const sx = (cw - txtW) * 0.5;
    const sy = (ch - txtH) * 0.5;

    const rays = [];
    const txtData = txtCtx.getImageData(0, 0, txtW, txtH);
    for (let i = 0; i < txtData.data.length; i += 4) {
      const ii = i / 4;
      const row = Math.floor(ii / txtW);
      const col = ii % txtW;
      const alpha = txtData.data[i + 3];
      if (alpha !== 0) {
        rays.push(new Ray(row, col));
      }
    }

    let current = 1;
    tick();

    function tick() {
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH);
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.globalCompositeOperation = "lighter";
      if (drawRays(current)) {
        current = Math.min(current + 1, txtW);
        requestAnimationFrame(tick);
      } else {
        fadeOut();
      }
      ctx.restore();
    }

    function fadeOut() {
      ctx.clearRect(0, 0, cw, ch);
      ctx.globalAlpha *= 0.95;
      ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH);
      if (ctx.globalAlpha > 0.01) {
        requestAnimationFrame(fadeOut);
      } else {
        setTimeout(restart, 500);
      }
    }

    function restart() {
      rays.forEach((ray) => ray.reset());
      ctx.globalAlpha = 1;
      buffer.clearRect(0, 0, txtW, txtH);
      current = 1;
      tick();
    }

    function drawRays(c) {
      let count = 0;
      ctx.beginPath();
      rays.forEach((ray) => {
        if (ray.col < c) {
          count += ray.draw();
        }
      });
      ctx.stroke();
      return count !== rays.length;
    }

    console.log(txtW, txtH);

    function Ray(row, col) {
      this.col = col;
      this.row = row;
      const xp = sx + col;
      const yp = sy + row;
      const ath = txtH / 1.5;
      let a = (pi2 * (this.row - ath * 0.5)) / ath;
      if (a === 0) a = (Math.random() - 0.5) * pi2;
      let da = 0.02 * Math.sign(a) + (Math.random() - 0.5) * 0.005;
      let l = 0;
      let dl = Math.random() * 2 + 2;
      let buffered = false;

      this.reset = function () {
        a = (pi2 * (this.row - ath * 0.5)) / ath;
        if (a === 0) a = -pi2 * 0.5;
        l = 0;
        buffered = false;
      };

      this.draw = function () {
        if (l < 0) {
          if (!buffered) {
            buffer.fillStyle = gradient;
            buffer.fillRect(this.col, this.row, 1, 1);
            buffered = true;
          }
          return 1;
        } else {
          ctx.moveTo(xp, yp);
          ctx.lineTo(xp + Math.cos(a) * l, yp + Math.sin(a) * l);
          a += da;
          l += Math.cos(a) * dl;
          return 0;
        }
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%" }}
    />
  );
};

export default HeroTitle;
