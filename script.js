//1x4 2x3 3x2 4x1
        // tab = [[0,0,0,0,0,0,0,0,0,0,0,0][0,0,0,0,0,0,0,0,0,0,0,0]]
        function losuj() {
            document.getElementById("p2").innerHTML = ""
            var tt = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ];
            temporary4 = (Math.floor(Math.random() * 2));
            // true = poziomo  false = pionowo
            czworka_place_x = (Math.floor(Math.random() * 10 + 1));
            czworka_place_y = (Math.floor(Math.random() * 10 + 1));

            if (temporary4 == 1) {
                czworka_orientation = true
            }
            else if (temporary4 == 0) {
                czworka_orientation = false
            }
            if (czworka_orientation == true) {
                if (czworka_place_x > 0 && czworka_place_x <= 7) {
                    for (i = 0; i < 4; i++) {
                        tt[czworka_place_y][czworka_place_x + i] = 1
                    }
                }
                else if (czworka_place_x > 7) {
                    for (i = 0; i < 4; i++) {
                        tt[czworka_place_y][czworka_place_x - i] = 1
                    }
                }
            }
            if (czworka_orientation == false) {
                if (czworka_place_x > 0 && czworka_place_x <= 7) {
                    for (i = 0; i < 4; i++) {
                        tt[czworka_place_x + i][czworka_place_y] = 1
                    }
                }
                else if (czworka_place_x > 7) {
                    for (i = 0; i < 4; i++) {
                        tt[czworka_place_x - i][czworka_place_y] = 1
                    }
                }
            }
            //trojki
            trojka_counter = 0
            while (trojka_counter != 2) {
                temporary3 = (Math.floor(Math.random() * 2));
                if (temporary3 == 1) {
                    trojka_orientation = true
                }
                else if (temporary3 == 0) {
                    trojka_orientation = false
                }
                //true - poziomo  false - pionowo
                let temp_coutner = 0
                if (trojka_orientation == true) {
                    trojka_place_x = (Math.floor(Math.random() * 7 + 1));
                    trojka_place_y = (Math.floor(Math.random() * 10 + 1));
                    for (i = -1; i < 2; i++) {
                        for (j = -1; j < 5; j++) {
                            if (tt[trojka_place_y + i][trojka_place_x + j] == 1) {
                                temp_coutner += 1
                            }
                        }
                    }
                    if (temp_coutner == 0) {
                        trojka_counter += 1
                        for (i = 0; i < 3; i++) {
                            tt[trojka_place_y][trojka_place_x + i] = 1
                        }
                    }
                }
                if (trojka_orientation == false) {
                    trojka_place_x = (Math.floor(Math.random() * 10 + 1));
                    trojka_place_y = (Math.floor(Math.random() * 7 + 1));
                    for (i = -1; i < 4; i++) {
                        for (j = -1; j < 2; j++) {
                            if (tt[trojka_place_y + i][trojka_place_x + j] == 1) {
                                temp_coutner += 1
                            }
                        }
                    }
                    if (temp_coutner == 0) {
                        trojka_counter += 1
                        for (i = 0; i < 3; i++) {
                            tt[trojka_place_y + i][trojka_place_x] = 1
                        }
                    }
                }
            }
            //dwojki
            dwojka_counter = 0
            while (dwojka_counter != 3) {
                dwojka_orientation = true
                temp_coutner = 0
                temporary2 = (Math.floor(Math.random() * 2));
                if (temporary2 == 1) {
                    dwojka_orientation = true
                }
                if (temporary2 == 0) {
                    dwojka_orientation = false
                }

                let temp2_counter = 0
                //true poziomo false pionowo
                if (dwojka_orientation == true) {
                    dwojka_place_x = (Math.floor(Math.random() * 7 + 1));
                    dwojka_place_y = (Math.floor(Math.random() * 10 + 1));
                    for (i = -1; i < 2; i++) {
                        for (j = -1; j < 4; j++) {
                            if (tt[dwojka_place_y + i][dwojka_place_x + j] == 1) {
                                temp_coutner += 1
                            }
                        }
                    }
                    if (temp_coutner == 0) {
                        dwojka_counter += 1
                        for (i = 0; i < 2; i++) {
                            tt[dwojka_place_y][dwojka_place_x + i] = 1
                        }
                    }
                }
                if (dwojka_orientation == false) {
                    dwojka_place_x = (Math.floor(Math.random() * 10 + 1));
                    dwojka_place_y = (Math.floor(Math.random() * 7 + 1));
                    for (i = -1; i < 3; i++) {
                        for (j = -1; j < 2; j++) {
                            if (tt[dwojka_place_y + i][dwojka_place_x + j] == 1) {
                                temp_coutner += 1
                            }
                        }
                    }
                    if (temp_coutner == 0) {
                        dwojka_counter += 1
                        for (i = 0; i < 2; i++) {
                            tt[dwojka_place_y + i][dwojka_place_x] = 1
                        }
                    }
                }
            }
            //jedynki
            jedynka_counter = 0
            while (jedynka_counter != 4) {
                let temp1_counter = 0
                jedynka_place_x = (Math.floor(Math.random() * 9 + 1));
                jedynka_place_y = (Math.floor(Math.random() * 9 + 1));
                for (i = -1; i < 2; i++) {
                    for (j = -1; j < 3; j++) {
                        if (tt[jedynka_place_y + i][jedynka_place_x + j] == 1) {
                            temp1_counter += 1
                        }
                    }
                }
                if (temp1_counter == 0) {
                    jedynka_counter += 1
                    tt[jedynka_place_y][jedynka_place_x] = 1
                }
            }            
            for (i = 1; i < 11; i++) {
                row = document.createElement("div")
                row.setAttribute("class","row")
                for (j = 1; j < 11; j++) {
                   // document.write(tt[i][j])
                    field = document.createElement("div")
                    if(tt[i][j] == 1){
                        field.setAttribute("class","black")
                    }
                    else{
                        field.setAttribute("class","white")
                    }
                    row.appendChild(field)
                }
                //document.write("<br>")
                document.getElementById("p2").appendChild(row)
            }
}            
losuj()

// 4 3 3 2 2 2 1 1 1 1
function menu_statkow(){
    
}