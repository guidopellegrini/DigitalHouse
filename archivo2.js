function infoUserOnline(){
  
  var db = firebase.firestore();
  var docRef = db.collection("usuarios").doc(email)

  // Obtenemos la bateria actual del monopatin
  docRef.get()

  .then((doc) => {
    saldoMoment = doc.data().Saldo
    // console.log(saldoMoment)
  })

  .catch((error) => {
    console.error("Error", error);
  });

}