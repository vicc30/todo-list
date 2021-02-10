//Project Modal
export const projectModal = () => {
    // Get the modal new project
    var modal = document.getElementById("newProjectModal");

    // Get the button that opens the modal
    var btn = document.getElementById("newProjectBtn");

    // Get the X element that closes the modal
    var x = document.getElementsByClassName("btn-close")[0];

    // Get the close button that closes the modal
    var close = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = () => {
        modal.style.display = "block";
    }

    // When the user clicks on (x) or close, close the modal

    x.onclick = () => {
        modal.style.display = "none";
    }

    close.onclick = () => {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//Task modal
export const taskModal = () => {
    // Get the modal new project
    var modal = document.getElementById("newTaskModal");

    // Get the button that opens the modal
    var btn = document.getElementById("newTaskBtn");

    // Get the X element that closes the modal
    var x = document.getElementsByClassName("btn-close")[1];

    // Get the close button that closes the modal
    var close = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal
    btn.onclick = () => {
        if (document.querySelector('.list-group-item.active') != null) {
            modal.style.display = "block";
        } else {
            alert("Please select a project");
        }
    }

    // When the user clicks on (x) or close, close the modal

    x.onclick = () => {
        modal.style.display = "none";
    }

    close.onclick = () => {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
