let NA = new Territory("NA", "none", "black", ["SA"], 200, 275);
board.setNewTerritory(NA);

let SA = new Territory("SA", "none", "black", ["NA", "AF"], 300, 450);
board.setNewTerritory(SA);

let AF = new Territory("AF", "none", "black", ["SA", "AS"], 525, 375);
board.setNewTerritory(AF);

let AS = new Territory("AS", "none", "black", ["AF", "EU"], 700, 300);
board.setNewTerritory(AS);

let EU = new Territory("EU", "none", "black", ["AS"], 525, 225);
board.setNewTerritory(EU);