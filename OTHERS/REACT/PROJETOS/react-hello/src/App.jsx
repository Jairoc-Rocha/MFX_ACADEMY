import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgenFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idServices";
import Timer from "./components/Timer";
import CheckBoxInput from "./components/CheckBoxInput";
import OnlineOffline from "./components/OnlineOffline";

function App() {
  const [name, setName] = useState("Raphael");
  const [birthDate, setBirthDate] = useState("1982-12-22");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowtimer) => !currentShowtimer);
  }

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  }, []);

  return (
    <>
      <Header>react-hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />
        {showTimer && (
          <div className="text-right m-1">
            <Timer />
          </div>
        )}
        <CheckBoxInput
          labelDescription="Mostrar cronômetro"
          onCheckBoxChange={toggleShowTimer}
        />
        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id={getNewId()}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você tem{" "}
          {getAgenFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}

export default App;
