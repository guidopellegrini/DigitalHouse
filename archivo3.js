function infoMonoActivo(){
  
  var db = firebase.firestore();
  var docRef = db.collection("monopatines").doc(idMono)

  // Obtenemos la bateria actual del monopatin
  docRef.get()

  .then((doc) => {
    bateria = doc.data().Autonomia
  })

  .catch((error) => {
    console.error("Error", error);
  });

}