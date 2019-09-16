class SubMenu {
    constructor() {
        this.subMenu = document.getElementsByClassName("subMenu")[0];
    };

    clear() {
        this.subMenu.innerHTML = "";
    }

    greetings() {
        let greet1 = document.createElement("p");
        greet1.classList.toggle("subMenu__paragraph");
        greet1.innerHTML = "Hello player, welcome to Bellum, where every action has a consequence.";
        let greet2 = document.createElement("p");
        greet2.classList.toggle("subMenu__paragraph");
        greet2.innerHTML = "To choose an action, select the letter that is surrounded by parenthesis and click enter.";
        let greet3 = document.createElement("p");
        greet3.classList.toggle("subMenu__paragraph");
        greet3.innerHTML = "In this menu you have to choose between the modes (R)EAL and (F)UN.";
        let greet4 = document.createElement("p");
        greet4.classList.toggle("subMenu__paragraph");
        greet4.innerHTML = "In the (R)EAL mode you will experience the simulation most close to reality.";
        let greet5 = document.createElement("p");
        greet5.classList.toggle("subMenu__paragraph");
        greet5.innerHTML = "Contrary to the first one, (F)UN mode is as unrealistic as it's fun and outrageous";
        this.subMenu.appendChild(greet1);
        this.subMenu.appendChild(greet2);
        setTimeout(() => {
            this.clear();
            this.subMenu.appendChild(greet3);
            this.subMenu.appendChild(greet4);
            this.subMenu.appendChild(greet5);
        }, 15000);
    }
}