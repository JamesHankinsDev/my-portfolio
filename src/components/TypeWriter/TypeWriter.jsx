import React, { useState, useEffect } from 'react';

export const TypeWriter = ({ textArray, typeSpeed }) => {
  const [state, setState] = useState({
    text: '',
    currentIndex: 0,
    wordsTyped: 0,
    writing: true,
  });

  const toggleIsTyping = () => {
    setState((cs) => ({
      ...cs,
      writing: !state.writing,
    }));
  };

  const animateTyping = () => {
    const forwardTyping = () => {
      setState((cs) => ({
        ...cs,
        text: textArray[state.wordsTyped % textArray.length].slice(0, [
          state.currentIndex,
        ]),
        currentIndex: state.currentIndex + 1,
      }));
    };
    const backwardTyping = () => {
      setState((cs) => ({
        ...cs,
        text: state.text.slice(0, state.text.length - 1),
        currentIndex: state.currentIndex - 1,
      }));
    };
    state.writing ? forwardTyping() : backwardTyping();
  };

  const completeCurrentWord = () => {
    setState((cs) => ({
      ...cs,
      wordsTyped: state.wordsTyped + 1,
      currentIndex: 0,
    }));
  };

  useEffect(() => {
    if (
      state.currentIndex ===
        textArray[state.wordsTyped % textArray.length].length + 1 &&
      state.writing
    ) {
      setTimeout(() => {
        toggleIsTyping();
      }, typeSpeed * 10);
    } else if (state.currentIndex === -1) {
      completeCurrentWord();
      toggleIsTyping();
    } else {
      setTimeout(() => {
        animateTyping();
      }, typeSpeed);
    }
  }, [animateTyping, completeCurrentWord, toggleIsTyping]);

  return <h3>{state.text}|</h3>;
};
