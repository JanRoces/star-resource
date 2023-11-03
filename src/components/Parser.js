import { useState } from 'react';
import { RESOURCE } from '../utils/resources';

function Parser() {
  const [inputText, setInputText] = useState('');
  const resourceDB = Object.values(RESOURCE);

  function changeText(e) {
    setInputText(e.target.value);
  }

  function findResource(symbol) {
    const resource = resourceDB.find((r) => r.symbol === symbol);

    if (resource && resource.symbol === 'He-3') {
      return 'HELIUM_3';
    }

    return resource ? resource.name.toUpperCase() : null;
  }

  function parseString() {
    const str = inputText.split(' ');

    let planetName;
    let resource;

    let planets = [];
    let resources = [];

    let newObject = false;
    let planetIndex = -1;

    str.forEach((item, index) => {
      if (index === 0 || newObject) {
        planetName = item;
        newObject = false;

        return;
      }

      const str1 = item.split('\t');

      if (str1.length === 2) {
        if (str1[1] === 'Planet' || str1[1] === 'Moon') {
          const symbol = str1[0].split(',');

          resource = findResource(symbol[0]);

          resources.push('RESOURCE.' + resource);

          if (str1[1] === 'Planet') {
            planetName = "'" + planetName.toLowerCase() + "'";

            const planetObject = {
              name: planetName,
              resources,
              moons: [],
            };

            planetIndex++;
            planetName = '';
            resources = [];

            planets.push(planetObject);
          }

          if (str1[1] === 'Moon') {
            planetName = "'" + planetName.toLowerCase() + "'";

            const moonObject = {
              name: planetName,
              resources,
            };

            planetName = '';
            resources = [];

            planets[planetIndex].moons.push(moonObject);
          }

          newObject = true;

          return;
        } else {
          planetName = planetName + ' ' + str1[0];

          const symbol = str1[1].split(',');

          resource = findResource(symbol[0]);

          resources.push('RESOURCE.' + resource);

          return;
        }
      } else {
        const symbol = str1[0].split(',');
        resource = findResource(symbol[0]);

        if (resource) {
          resources.push('RESOURCE.' + resource);
        }

        return;
      }
    });

    console.log('planets :>> ', JSON.stringify(planets, null, 2));
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={changeText}></input>
      <button onClick={parseString}>Parse</button>
    </div>
  );
}

export default Parser;
