import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingFromServer } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  const [state, setState] = useState(false);

  const newGreeting = () => {
    setState(() => false);
    dispatch(getGreetingFromServer());
  };

  useEffect(() => {
    dispatch(getGreetingFromServer());
  }, [dispatch]);

  useEffect(() => {
    setState(() => greetings);
  }, [greetings]);

  return (
    <div className="wrapper">
      <h1 className="app-heading">Greetings App</h1>
      <p className="greeting">{state ? greetings.message : 'Loading...'}</p>
      <button type="button" className="greet" onClick={newGreeting}>
        Greet
      </button>
    </div>
  );
};

export default Greeting;
