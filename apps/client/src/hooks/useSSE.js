import { useEffect, useLayoutEffect, useRef } from 'react';

const useSSE = (handlers) => {
  const handlersRef = useRef(handlers);

  useLayoutEffect(() => {
    handlersRef.current = handlers;
  });

  useEffect(() => {
    const es = new EventSource('/api/events');
    const eventNames = Object.keys(handlersRef.current);
    const listeners = Object.fromEntries(
      eventNames.map((event) => [event, () => handlersRef.current[event]()]),
    );

    eventNames.forEach((event) => es.addEventListener(event, listeners[event]));

    return () => {
      eventNames.forEach((event) => es.removeEventListener(event, listeners[event]));
      es.close();
    };
  }, []);
};

export default useSSE;
