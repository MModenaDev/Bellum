let NA = new Territory("NA", "none", "black", ["SA"], 200, 300);
board.setNewTerritory(NA);

let SA = new Territory("SA", "none", "black", ["NA", "AF"], 200, 300);
board.setNewTerritory(SA);

let AF = new Territory("AF", "none", "black", ["SA", "AS"], 200, 300);
board.setNewTerritory(AF);

let AS = new Territory("AS", "none", "black", ["AF", "EU", "OC"], 200, 300);
board.setNewTerritory(AS);

let EU = new Territory("EU", "none", "black", ["AS"], 200, 300);
board.setNewTerritory(EU);