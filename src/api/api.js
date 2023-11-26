export async function _create(data) {
    return await fetch('http://localhost:7070/notes', {
        method: 'POST',
        body: JSON.stringify({data})
    });
}

export async function _read() {
    const resp = await fetch('http://localhost:7070/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const json = await resp.json();
    return json;
    
}

export async function _update() {
    const resp = await fetch('http://localhost:7070/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    const json = await resp.json();
    return json;
}

export async function _delete(id) {
    return await fetch(`http://localhost:7070/notes/${id}`, {
        method: 'DELETE',
    })
}