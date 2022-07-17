import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ДОБРЫЙ ВЕЧЕР",
            "Я ВИКА",
            "А МОЖЕТ БЫТЬ НИКА",
          "ЛЮБЛЮ ГУЛЯТЬ",
          "И ВООБЩЕ",
          "УЖАС!",
            "КАШМАР!",
            "ТРЭШ!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
