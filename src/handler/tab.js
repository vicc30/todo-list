const tab = () => {
    return (
        //Selects list group and maps each element
        document.querySelectorAll('.list-group-item').forEach(element => {
            //event listener for each
            element.addEventListener('click', e => {
                //check if each item has class active
                document.querySelectorAll('.list-group-item').forEach(item => {
                    //If it has active class removes it
                    if (item.classList.contains('active')) {
                        item.classList.toggle('active');
                    }
                });
                //select current clicked as target
                const target = e.currentTarget;
                //Adds class active to target
                console.log(target.id);
                target.classList.toggle("active");
                //Search for tab-pane
                document.querySelectorAll('.tab-pane').forEach(tab => {
                    //if tab has class active removes it
                    if (tab.classList.contains('active')) {
                        tab.classList.toggle('active');
                        //If tab is same as clicked set class active
                    } else if (`${tab.id}-list` === target.id) {
                        tab.classList.toggle('active');
                    }
                });
            });
        })
    );
}

export default tab;