import {playlistSearch} from './playlist-search.js';
import {playlistCreate} from './playlist-create.js';

export let playlistPageBuild = async ()=>{
    let name = document.querySelector('#input-bar').value;
    let playlistList;
    await playlistSearch(name)
        .then((response)=>{
            playlistList = response;
        })

    let body = document.querySelector('#centre-col');
    body.innerHTML = '';

    let row = document.createElement('div');
    row.className = 'row';

    let col1 = document.createElement('div');
    col1.className = 'col-4';
    let col2 = document.createElement('div');
    col2.className = 'col-4';
    let col3 = document.createElement('div');
    col3.className = 'col-4';

    let counter = 1;

    for (let playlist in playlistList) {

    }

    row.append(col1, col2, col3);
    body.append(row);

    let empty;
    if (playlistList.length === 0) {
        empty = 'empty';
    } else {
        empty = 'not empty';
    }

    let createButton = playlistCreate(empty);
    body.append(createButton);
}