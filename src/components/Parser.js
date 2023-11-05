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

    if (symbol === 'None') {
      return null;
    }

    if (!resource && typeof symbol === 'string') {
      return 'appendName';
    }

    if (resource && resource.symbol === 'He-3') {
      return 'HELIUM_3';
    }

    if (resource && resource.symbol === 'IL') {
      return 'IONIC_LIQUIDS';
    }

    if (resource && resource.symbol === 'Aq') {
      return 'AQUEOUS_HEMATITE';
    }

    if (resource) {
      switch (resource.symbol) {
        case 'He-3':
          return 'HELIUM_3';
        case 'IL':
          return 'IONIC_LIQUIDS';
        case 'Aq':
          return 'AQUEOUS_HEMATITE';
        case 'R-COC':
          return 'CARBOXYLIC_ACIDS';
        default:
          return resource.name.toUpperCase();
      }
    }

    return null;
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
      const str1 = item.split('\t');

      if (index === 0 || newObject) {
        if (str1.length === 2) {
          planetName = str1[0];
          newObject = false;

          if (str1[1] !== 'Planet' || str1[1] !== 'Moon') {
            const symbol = str1[1].split(',');

            resource = findResource(symbol[0]);

            resources.push('RESOURCE.' + resource);
          }
        } else if (str1.length === 3) {
          planetName = planetName + ' ' + str1[0];

          const symbol = str1[1].split(',');
          resource = findResource(symbol[1]);

          if (resource) {
            resources.push('RESOURCE.' + resource);
          }

          if (str1[2] === 'Planet') {
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

          if (str1[2] === 'Moon') {
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
        } else {
          planetName = item;
          newObject = false;
        }

        return;
      }

      if (str1.length === 3) {
        planetName = planetName + ' ' + str1[0];

        const symbol = str1[1].split(',');
        resource = findResource(symbol[1]);

        if (resource) {
          resources.push('RESOURCE.' + resource);
        }

        if (str1[2] === 'Planet') {
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

        if (str1[2] === 'Moon') {
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
      } else if (str1.length === 2) {
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
          if (resource === 'appendName') {
            planetName = planetName + ' ' + str1[0];
          } else {
            resources.push('RESOURCE.' + resource);
          }
        }

        return;
      }
    });

    console.log('planets: ', JSON.stringify(planets, null, 2));
  }

  function clearText() {
    setInputText('');
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <input type="text" value={inputText} onChange={changeText}></input>
      <button onClick={parseString}>Parse</button>
      <button onClick={clearText}>Clear</button>
    </div>
  );
}

export default Parser;
