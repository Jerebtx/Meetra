
document.addEventListener('DOMContentLoaded', function () {
    const saveChangesBtn = document.getElementById('saveChangesBtn');
    const editProfileForm = document.getElementById('editProfileForm');

    saveChangesBtn.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Perubahan berhasil disimpan!');
        
    });
});

function redirectToProfil() {
    window.location.href = './profil.html';
}
