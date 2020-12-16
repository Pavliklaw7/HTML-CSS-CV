'use strict';

/* Change  value */

const name = document.getElementById('name');
const location = document.getElementById('location');
const language = document.getElementById('language');

const changeNameValue = function() {
  const applayName = document.getElementById('applay-name');
  const discardName = document.getElementById('discard-name');
  let nameValue = name.value;

  name.setAttribute('type', 'input');

  const saveChanges = function() {
    nameValue = name.value;
    name.setAttribute('type', 'button');
  };

  const discardChanges = function() {
    name.value = nameValue;
    name.setAttribute('type', 'button');
  };

  applayName.onclick = saveChanges;
  discardName.onclick = discardChanges;
};

const changeLocationValue = function() {
  const applayLocation = document.getElementById('applay-location');
  const discardLocation = document.getElementById('discard-location');
  let locationValue = location.value;

  location.setAttribute('type', 'input');

  const saveChanges = function() {
    locationValue = location.value;
    location.setAttribute('type', 'button');
  };

  const discardChanges = function() {
    location.value = locationValue;
    location.setAttribute('type', 'button');
  };

  applayLocation.onclick = saveChanges;
  discardLocation.onclick = discardChanges;
};

const changeLanguageValue = function() {
  const applayLanguage = document.getElementById('applay-language');
  const discardLanguage = document.getElementById('discard-language');
  let LanguageValue = language.value;

  language.setAttribute('type', 'input');

  const saveChanges = function() {
    LanguageValue = language.value;
    language.setAttribute('type', 'button');
  };

  const discardChanges = function() {
    language.value = LanguageValue;
    language.setAttribute('type', 'button');
  };

  applayLanguage.onclick = saveChanges;
  discardLanguage.onclick = discardChanges;
};

name.onclick = changeNameValue;
location.onclick = changeLocationValue;
language.onclick = changeLanguageValue;

/* Add Skill */

const skillInput = document.getElementById('newSkill');
const skillButton = document.getElementById('addSkillButton');
const ulSkills = document.getElementById('skills');

const addSkill = function(event) {
  event.preventDefault();

  const text = skillInput.value;
  const li = document.createElement('li');

  li.innerHTML = `<span>${text}</span>
  <button name="removeSkillButton" class="skills-remove-btn">x</button>`;
  li.classList.add('skills-item');
  ulSkills.appendChild(li);
  skillInput.value = '';
};

skillButton.onclick = addSkill;

/* Remove Skill */

const removeSkill = function(event) {
  const skill = event.target.closest('.skills-item');

  if (event.target.className !== 'skills-remove-btn') {

  }

  skill.remove();
};

ulSkills.onclick = removeSkill;
