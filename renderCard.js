function addCard() {
    var d1 = document.getElementById('shopcard');
    let newCard = '<div class="card text-center col-6 col-sm-3"> <div class="card-header"> Featured</div> <div cl' +
            'ass="card-body"><h5 class="card-title">Special title treatment</h5><p class="c' +
            'ard-text">With supporting text below as a natural lead-in to additional conten' +
            't.</p><a href="#" class="btn btn-primary">Go somewhere</a></div><div class="ca' +
            'rd-footer text-muted"> 2 days ago </div></div>';
    d1.insertAdjacentHTML('beforeend', newCard);
}
