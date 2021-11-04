import React from "react";

export default function ErvaringenFormulier({ containerState, setContainerState, postErvaring }) {

  const handleSubmit = (event) => {
    postErvaring();
    event.preventDefault();
    return;
  };

  const handleContainerState = (containerStateKey, formInput) => {
    setContainerState({ ...containerState, [containerStateKey]: formInput });
  };

  return (
    <form onSubmit={handleSubmit} id="reactieformulier">
      <h2>Plaats een reactie</h2>
      <label>Ik ben een</label>
      <br></br>
      <br></br>
      <input
        type="radio"
        id="jongen"
        name="geslacht"
        value="j"
        onChange={(event) => handleContainerState("ReactieGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht">Jongen</label>
      <input
        type="radio"
        id="meisje"
        name="geslacht"
        value="m"
        onChange={(event) => handleContainerState("ReactieGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht">Meisje</label>
      <input
        type="radio"
        id="x"
        name="geslacht"
        value="x"
        onChange={(event) => handleContainerState("ReactieGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht">X</label>
      <br></br>
      <br></br>
      <label>Leeftijd</label>
      <br></br>
      <input
        type="number"
        id="leeftijd"
        name="leeftijd"
        onChange={(event) => handleContainerState("ReactieLeeftijd", event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <textarea
        rows="4"
        name="reactie"
        form="reactieformulier"
        placeholder="Jouw reactie"
        onChange={(event) => handleContainerState("ReactieReactie", event.target.value)}
      ></textarea>
      <br></br>

      <label>
        Wil je bericht krijgen als anderen reageren op deze post? Vul dan je mailadres in. (niet
        zichtbaar voor anderen)
      </label>
      <br></br>
      <input
        type="text"
        id="emailabonnement"
        name="emailabonnement"
        placeholder="vul je abonnement emailadres in"
        onChange={(event) => handleContainerState("ReactieAbonnement", event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label> Stuur mijn ervaring ook naar een hulpverlener.</label>
      <br></br>
      <input
        type="text"
        id="emailhulpverlener"
        name="emailhulpverlener"
        placeholder="Vul je antwoord emailadres voor de hulpverlener in"
        onChange={(event) => handleContainerState("ReactieHulpVerlener", event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input type="submit" value="Verstuur" onSubmit={() => handleSubmit()}></input>
    </form>
  );
}
