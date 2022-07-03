export default function saveData($input) {
    let value = $input.value;
    let $realm = $input.closest('[data-realm]');
    let id = $realm.id;
    let path = [];
    let $widget = $input.closest('[data-widget]');

    if ($widget) {
        path.push($widget.dataset.widget)
    }

    path.push($input.name)
    let data = {
        id,
        path,
        value
    }

    try {
        console.log('I got here!');
        fetch(`http://localhost:3000/${$realm.dataset.realm}`, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'same-origin',
        });
    }
    catch (error) {
        console.error(new Error(error));
    }

}