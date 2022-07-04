export default async function saveData($input) {
    let value = $input.value;
    let $realm = $input.closest('[data-realm]');
    let id = $realm.id;
    let path = ['values'];


    path.push($input.name)

    let data = {
        id,
        path,
        value
    }
    if ($realm.dataset.realm == 'destination') {
        let parent_id = $realm.closest('[data-realm=trip]').id;
        data.parent_id = parent_id;
    }


    console.log('[HEY] ', data)

    try {
        console.log('I got here!');
        let resp = await fetch(`http://localhost:3000/${$realm.dataset.realm}`, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'same-origin',
        });

        let database = await resp.json();

        //save to localstorage
        localStorage.setItem('wander_db', JSON.stringify(database));
    }
    catch (error) {
        console.error(new Error(error));
    }

}