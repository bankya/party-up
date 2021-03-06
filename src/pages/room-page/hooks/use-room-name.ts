import { useEffect, useState } from "react";
import { useFirebase } from "lib/firebase/hook";
import { useParams, useHistory } from "react-router-dom";

export const useRoomName = () => {
  const firebase = useFirebase();
  const { roomKey } = useParams<{ roomKey: string }>();
  const history = useHistory();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    firebase
      .database()
      .ref(`rooms/${roomKey}/title`)
      .once("value")
      .then((snapshot) => {
        if (!snapshot.exists()) return history.push("/not-found");
        setRoomName(snapshot.val());
      })
      .catch((error) => {
        console.warn(error);
      });

    return () => firebase.database().ref(`rooms/${roomKey}/name`).off();
  }, [firebase, history, roomKey]);

  return roomName;
};
