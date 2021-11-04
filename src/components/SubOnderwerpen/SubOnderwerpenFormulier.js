import React, { useState } from "react";

export default function SubOnderwerpenFormulier({
  containerState,
  setContainerState,
  postSubOnderwerp,
}) {
  const [isHulpverlenerChecked, setIsHulpverlenerChecked] = useState(false);

  const handleSubmit = (event) => {
    postSubOnderwerp();
    event.preventDefault();
    return;
  };

  const handleContainerState = (containerStateKey, formInput) => {
    setContainerState({ ...containerState, [containerStateKey]: formInput });
  };

  return (
    <form onSubmit={handleSubmit} id="subonderwerpenformulier">
      <label>Ik ben een</label>
      <br></br>
      <br></br>
      <input
        type="radio"
        id="jongen"
        name="geslacht"
        value="j"
        onChange={(event) => handleContainerState("SubOnderwerpGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht"> Jongen </label>
      <input
        type="radio"
        id="meisje"
        name="geslacht"
        value="m"
        onChange={(event) => handleContainerState("SubOnderwerpGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht"> Meisje </label>
      <input
        type="radio"
        id="x"
        name="geslacht"
        value="x"
        onChange={(event) => handleContainerState("SubOnderwerpGeslacht", event.target.value)}
      ></input>
      <label htmlFor="geslacht"> X </label>
      <br></br>
      <br></br>
      <label>Leeftijd</label>
      <br></br>
      <input
        type="number"
        id="leeftijd"
        name="leeftijd"
        onChange={(event) => handleContainerState("SubOnderwerpLeeftijd", event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        id="emailabonnement"
        name="emailabonnement"
        placeholder="Titel van je post"
        onChange={(event) => handleContainerState("SubOnderwerpTitel", event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <textarea
        rows="4"
        name="subonderwerpreactie"
        form="subonderwerpformulier"
        placeholder="Jouw verhaal of vraag"
        onChange={(event) => handleContainerState("SubOnderwerpReactie", event.target.value)}
      ></textarea>
      <br></br>
      <br></br>
      <label>Selecteer het forum onderwerp</label>
      <br></br>
      <select
        id="subonderwerp"
        onChange={(event) => handleContainerState("SubOnderwerpOnderwerp", event.target.value)}
      >
        <option value="" selected disabled hidden>
          Kies hier
        </option>
        <optgroup label="Vrienden en Relaties">
          <option value="16">Vriendschap</option>
          <option value="15">Verliefd &amp; Verkering</option>
          <option value="56">Foute vrienden</option>
          <option value="18">Pesten</option>
        </optgroup>

        <optgroup label="Bij mij thuis">
          <option value="10">Mijn ouders</option>
          <option value="48">Familie</option>
          <option value="14">Op jezelf</option>
          <option value="33">Geloof</option>
        </optgroup>

        <optgroup label="Seks enzo">
          <option value="45">Vrijen</option>
          <option value="44">Meidenvragen</option>
          <option value="43">Jongensvragen</option>
          <option value="47">Seks tegen je zin</option>
        </optgroup>

        <optgroup label="Ergens mee zitten">
          <option value="50">Gevoelens</option>
          <option value="29">Depressie</option>
          <option value="28">Rouwen</option>
          <option value="31">Jezelf iets aandoen</option>
        </optgroup>

        <optgroup label="Vrije tijd">
          <option value="36">Sport, muziek, huisdieren en hobby</option>
          <option value="37">Uitgaan</option>
          <option value="35">Vakantie</option>
          <option value="58">Maatschappelijk betrokken</option>
        </optgroup>

        <optgroup label="School, werk, geld">
          <option value="7">Geld</option>
          <option value="4">School</option>
          <option value="5">Studie</option>
          <option value="6">Werk</option>
        </optgroup>

        <optgroup label="Goed fout">
          <option value="38">Internetgevaren</option>
          <option value="41">Geweld en criminaliteit</option>
          <option value="39">Discriminatie</option>
          <option value="40">In aanraking met de politie</option>
        </optgroup>

        <optgroup label="Verslaving">
          <option value="53">Drank</option>
          <option value="54">Drugs</option>
          <option value="55">Roken</option>
          <option value="24">Andere verslavingen</option>
        </optgroup>

        <optgroup label="Gezondheid">
          <option value="49">Corona</option>
          <option value="22">Eten, bewegen en gewicht</option>
          <option value="30">Uiterlijk en verzorging</option>
          <option value="52">Je lichaam</option>
        </optgroup>

        <optgroup label="Gewoon anders">
          <option value="20">LHBTIQ+</option>
          <option value="26">Leven met een beperking</option>
          <option value="13">Leven tussen twee culturen</option>
          <option value="46">Jong en zwanger</option>
        </optgroup>
      </select>
      <br></br>
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
        placeholder="E-Mail"
        onChange={(event) => handleContainerState("SubOnderwerpAbonnement", event.target.value)}
      ></input>
      <br></br>
      <br></br>

      {!isHulpverlenerChecked && (
        <input type="checkbox" onChange={() => setIsHulpverlenerChecked(true)}></input>
      )}

      <label> Stuur mijn ervaring ook naar een hulpverlener.</label>

      <br></br>
      {isHulpverlenerChecked && (
        <input
          type="text"
          id="emailhulpverlener"
          name="emailhulpverlener"
          placeholder="E-Mail"
          onChange={(event) => handleContainerState("SubOnderwerpHulpVerlener", event.target.value)}
        ></input>
      )}
      <br></br>
      <br></br>
      <input
        className="ForumFormButton"
        type="submit"
        value="Verstuur"
        onSubmit={() => handleSubmit()}
      ></input>
    </form>
  );
}
