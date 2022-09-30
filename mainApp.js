const store = Redux.createStore(moodReducer);

const face = document.getElementById("face");

//grabbing the elements by each button. 

document.getElementById('cryLaugh').addEventListener('click', function(){
    store.dispatch({type: 'CRY_LAUGH', payload: 'v(T▽T)'});
});
document.getElementById('sad').addEventListener('click', function(){
    store.dispatch({type: 'SAD', payload: ';_;'});
});
document.getElementById('dead').addEventListener('click', function(){
    store.dispatch({type: 'DEAD', payload: 'ヽ(冫､)ノ'});
});
document.getElementById('rollEyes').addEventListener('click', function(){
    store.dispatch({type: 'ROLL_EYES', payload: '◔_◔'});
});

function renderFace() {
    face.innerHTML = store.getState().face;
}

renderFace()
store.subscribe(renderFace)
