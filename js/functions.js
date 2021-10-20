//function.js
//Author: Troy Milante

/*
Warning:
Any modifications can cause for the Webapp to malfunction or to display
wrong data. So make sure you know what you're doing before changing or
modifying this file.

Mythos will not be responsible for any damages caused once this file is
modified by anonymous.

Functions on this JS File:
*Show Element Data
*[On Element Preview] Next and Previous
*Event Listener on element boxes
*Radioactive Elements Filter

*/

//Sector 1
//Description: Athena™ TOE

//Variables
//Close button
let cdp = document.getElementById("close-predata");
//Container Opac: EPO
let epo = document.getElementById("element-preview-opac");
//Container Main:
let ep = document.getElementById("element-preview");
//Next button
let next = document.getElementById("next");
//Prev button
let prev = document.getElementById("prev");
//Black Opacity BG Overlay
let blackOpac = document.getElementById("black-opac");

//Element Previewer Variable Handlers
//Name
let epname = document.getElementById("ep-name");
//Symbol
let epsymbol = document.getElementById("ep-symbol");
//Atom Configuration
let epac = document.getElementById("atom-config");
//Chemical Group Block
let epcgb = document.getElementById("cgb");
//Atomic Number
let epan = document.getElementById("atomic-number");
//Atomic Mass
let epam = document.getElementById("atomic-mass");
//Color Coding
let epcc = document.getElementById("ep-symbol-div");

//Radioactive Filter
let ri = document.getElementById("radioactive");
//Event Response
function showRi() {
    ri.style.display = "block";
}
function hideRi() {
    ri.style.display = "none";
}
//Filter Handler
function triggerRfilter() {
    switch (epan.innerText) {
        case "43":
            showRi();
            break;
        case "61":
            showRi();
            break;
        case "84":
            showRi();
            break;
        case "85":
            showRi();
            break;
        case "86":
            showRi();
            break;
        case "87":
            showRi();
            break;
        case "88":
            showRi();
            break;
        case "89":
            showRi();
            break;
        case "90":
            showRi();
            break;
        case "91":
            showRi();
            break;
        case "92":
            showRi();
            break;
        case "93":
            showRi();
            break;
        case "94":
            showRi();
            break;
        case "95":
            showRi();
            break;
        case "96":
            showRi();
            break;
        case "97":
            showRi();
            break;
        case "98":
            showRi();
            break;
        case "99":
            showRi();
            break;
        case "100":
            showRi();
            break;
        case "101":
            showRi();
            break;
        case "102":
            showRi();
            break;
        case "103":
            showRi();
            break;
        case "104":
            showRi();
            break;
        case "105":
            showRi();
            break;
        case "106":
            showRi();
            break;
        case "107":
            showRi();
            break;
        case "108":
            showRi();
            break;
        case "109":
            showRi();
            break;
        case "110":
            showRi();
            break;
        case "111":
            showRi();
            break;
        case "112":
            showRi();
            break;
        case "113":
            showRi();
            break;
        case "114":
            showRi();
            break;
        case "115":
            showRi();
            break;
        case "116":
            showRi();
            break;
        case "117":
            showRi();
            break;
        case "118":
            showRi();
            break;
    }
}



//The Next-Prev System
function nextEpan() {
    switch (epan.innerText) {
        case "1":
            prev.disabled = false;
            helium();
            break;
        case "2":
            lithium();
            break;
        case "3":
            berrylium();
            break;
        case "4":
            boron();
            break;
        case "5":
            carbon();
            break;
        case "6":
            nitrogen();
            break;
        case "7":
            oxygen();
            break;
        case "8":
            fluorine();
            break;
        case "9":
            neon();
            break;
        case "10":
            sodium();
            break;
        case "11":
            magnesium();
            break;
        case "12":
            aluminum();
            break;
        case "13":
            silicon();
            break;
        case "14":
            phosphorus();
            break;
        case "15":
            sulfur();
            break;
        case "16":
            chlorine();
            break;
        case "17":
            argon();
            break;
        case "18":
            potassium();
            break;
        case "19":
            calcium();
            break;
        case "20":
            scandium();
            break;
        case "21":
            titanium();
            break;
        case "22":
            vanadium();
            break;
        case "23":
            chromium();
            break;
        case "24":
            manganese();
            break;
        case "25":
            iron();
            break;
        case "26":
            cobalt();
            break;
        case "27":
            nickel();
            break;
        case "28":
            copper();
            break;
        case "29":
            zinc();
            break;
        case "30":
            gallium();
            break;
        case "31":
            germanium();
            break;
        case "32":
            arsenic();
            break;
        case "33":
            selenium();
            break;
        case "34":
            bromine();
            break;
        case "35":
            krypton();
            break;
        case "36":
            rubidium();
            break;
        case "37":
            strontium();
            break;
        case "38":
            yttrium();
            break;
        case "39":
            zirconium();
            break;
        case "40":
            niobium();
            break;
        case "41":
            molybdenum();
            break;
        case "42":
            technetium();
            break;
        case "43":
            ruthenium();
            break;
        case "44":
            rhodium();
            break;
        case "45":
            palladium();
            break;
        case "46":
            silver();
            break;
        case "47":
            cadmium();
            break;
        case "48":
            indium();
            break;
        case "49":
            tin();
            break;
        case "50":
            antimony();
            break;
        case "51":
            tellurium();
            break;
        case "52":
            iodine();
            break;
        case "53":
            xenon();
            break;
        case "54":
            cesium();
            break;
        case "55":
            barium();
            break;
        case "56":
            lanthanum();
            break;
        case "57":
            cerium();
            break;
        case "58":
            praseodymium();
            break;
        case "59":
            neodymium();
            break;
        case "60":
            promethium();
            break;
        case "61":
            samarium();
            break;
        case "62":
            europium();
            break;
        case "63":
            gadolinium();
            break;
        case "64":
            terbium();
            break;
        case "65":
            dysprosium();
            break;
        case "66":
            holmium();
            break;
        case "67":
            erbium();
            break;
        case "68":
            thulium();
            break;
        case "69":
            ytterbium();
            break;
        case "70":
            lutetium();
            break;
        case "71":
            hafnium();
            break;
        case "72":
            tantalum();
            break;
        case "73":
            tungsten();
            break;
        case "74":
            rhenium();
            break;
        case "75":
            osmium();
            break;
        case "76":
            iridium();
            break;
        case "77":
            platinum();
            break;
        case "78":
            gold();
            break;
        case "79":
            mercury();
            break;
        case "80":
            thallium();
            break;
        case "81":
            lead();
            break;
        case "82":
            bismuth();
            break;
        case "83":
            polonium();
            break;
        case "84":
            astatine();
            break;
        case "85":
            radon();
            break;
        case "86":
            francium();
            break;
        case "87":
            radium();
            break;
        case "88":
            actinium();
            break;
        case "89":
            thorium();
            break;
        case "90":
            protactinium();
            break;
        case "91":
            uranium();
            break;
        case "92":
            neptunium();
            break;
        case "93":
            plutonium();
            break;
        case "94":
            americium();
            break;
        case "95":
            curium();
            break;
        case "96":
            berkelium();
            break;
        case "97":
            californium();
            break;
        case "98":
            einsteinium();
            break;
        case "99":
            fermium();
            break;
        case "100":
            mendelevium();
            break;
        case "101":
            nobelium();
            break;
        case "102":
            lawrencium();
            break;
        case "103":
            rutherfordium();
            break;
        case "104":
            dubnium();
            break;
        case "105":
            seaborgium();
            break;
        case "106":
            bohrium();
            break;
        case "107":
            hassium();
            break;
        case "108":
            meitnerium();
            break;
        case "109":
            darmstadtium();
            break;
        case "110":
            roentgenium();
            break;
        case "111":
            copernicium();
            break;
        case "112":
            nihonium();
            break;
        case "113":
            flerovium();
            break;
        case "114":
            moscovium();
            break;
        case "115":
            livermorium();
            break;
        case "116":
            tennessine();
            break;
        case "117":
            next.disabled = true;
            oganesson();
            break;
        case "118":
            next.disabled = true;
            addError();
            errorMATOE051();
            break;
        case "#":
            addError();
            errorMATOE002();  
    }
}
function prevEpan() {
    switch (epan.innerText) {
        case "1":
            prev.disabled = true;
            addError();
            errorMATOE051();
                break;
        case "2":
            prev.disabled = true;
            hydrogen();
                break;
        case "3":
            helium();
                break;
        case "4":
            lithium();
            break;
        case "5":
            berrylium();
            break;
        case "6":
            boron();
            break;
        case "7":
            carbon();
            break;
        case "8":
            nitrogen();
            break;
        case "9":
            oxygen();
            break;
        case "10":
            fluorine();
            break;
        case "11":
            neon();
            break;
        case "12":
            sodium();
            break;
        case "13":
            magnesium();
            break;
        case "14":
            aluminum();
            break;
        case "15":
            silicon();
            break;
        case "16":
            phosphorus();
            break;
        case "17":
            sulfur();
            break;
        case "18":
            chlorine();
            break;
        case "19":
            argon();
            break;
        case "20":
            potassium();
            break;
        case "21":
            calcium();
            break;
        case "22":
            scandium();
            break;
        case "23":
            titanium();
            break;
        case "24":
            vanadium();
            break;
        case "25":
            chromium();
            break;
        case "26":
            manganese();
            break;
        case "27":
            iron();
            break;
        case "28":
            cobalt();
            break;
        case "29":
            nickel();
            break;
        case "30":
            copper();
            break;
        case "31":
            zinc();
            break;
        case "32":
            gallium();
            break;
        case "33":
            germanium();
            break;
        case "34":
            arsenic();
            break;
        case "35":
            selenium();
            break;
        case "36":
            bromine();
            break;
        case "37":
            krypton();
            break;
        case "38":
            rubidium();
            break;
        case "39":
            strontium();
            break;
        case "40":
            yttrium();
            break;
        case "41":
            zirconium();
            break;
        case "42":
            niobium();
            break;
        case "43":
            molybdenum();
            break;
        case "44":
            technetium();
            break;
        case "45":
            ruthenium();
            break;
        case "46":
            rhodium();
            break;
        case "47":
            palladium();
            break;
        case "48":
            silver();
            break;
        case "49":
            cadmium();
            break;
        case "50":
            indium();
            break;
        case "51":
            tin();
            break;
        case "52":
            antimony();
            break;
        case "53":
            tellurium();
            break;
        case "54":
            iodine();
            break;
        case "55":
            xenon();
            break;
        case "56":
            cesium();
            break;
        case "57":
            barium();
            break;
        case "58":
            lanthanum();
            break;
        case "59":
            cerium();
            break;
        case "60":
            praseodymium();
            break;
        case "61":
            neodymium();
            break;
        case "62":
            promethium();
            break;
        case "63":
            samarium();
            break;
        case "64":
            europium();
            break;
        case "65":
            gadolinium();
            break;
        case "66":
            terbium();
            break;
        case "67":
            dysprosium();
            break;
        case "68":
            holmium();
            break;
        case "69":
            erbium();
            break;
        case "70":
            thulium();
            break;
        case "71":
            ytterbium();
            break;
        case "72":
            lutetium();
            break;
        case "73":
            hafnium();
            break;
        case "74":
            tantalum();
            break;
        case "75":
            tungsten();
            break;
        case "76":
            rhenium();
            break;
        case "77":
            osmium();
            break;
        case "78":
            iridium();
            break;
        case "79":
            platinum();
            break;
        case "80":
            gold();
            break;
        case "81":
            mercury();
            break;
        case "82":
            thallium();
            break;
        case "83":
            lead();
            break;
        case "84":
            bismuth();
            break;
        case "85":
            polonium();
            break;
        case "86":
            astatine();
            break;
        case "87":
            radon();
            break;
        case "88":
            francium();
            break;
        case "89":
            radium();
            break;
        case "90":
            actinium();
            break;
        case "91":
            thorium();
            break;
        case "92":
            protactinium();
            break;
        case "93":
            uranium();
            break;
        case "94":
            neptunium();
            break;
        case "95":
            plutonium();
            break;
        case "96":
            americium();
            break;
        case "97":
            curium();
            break;
        case "98":
            berkelium();
            break;
        case "99":
            californium();
            break;
        case "100":
            einsteinium();
            break;
        case "101":
            fermium();
            break;
        case "102":
            mendelevium();
            break;
        case "103":
            nobelium();
            break;
        case "104":
            lawrencium();
            break;
        case "105":
            rutherfordium();
            break;
        case "106":
            dubnium();
            break;
        case "107":
            seaborgium();
            break;
        case "108":
            bohrium();
            break;
        case "109":
            hassium();
            break;
        case "110":
            meitnerium();
            break;
        case "111":
            darmstadtium();
            break;
        case "112":
            roentgenium();
            break;
        case "113":
            copernicium();
            break;
        case "114":
            nihonium();
            break;
        case "115":
            flerovium();
            break;
        case "116":
            moscovium();
            break;
        case "117":
            livermorium();
            break;
        case "118":
            tennessine();
            next.disabled = false;
            break;
        case "#":
            addError();
            errorMATOE002();
            break;
    }
}

//Colors
let cc_nm = "#F4B400";
let cc_am = "#DB3E23";
let cc_aem = "#4285F4";
let cc_tm = "#537EC5";
let cc_ptm = "#0F9D58";
let cc_m = "rgb(100,202,5)";
let cc_ng = "#E2644E";
let cc_h = "#972714";
let cc_l = "#CBAF71";
let cc_a = "#FAB647";

//Element Datas
//1-10
//Hydrogen
let name1 = "Hydrogen";
let symbol1 ="H";
let atomconfig1 = "1s<sup>1</sup>";
let cgb1 = "Non-Metal";
let atomnos1 = "1";
let atommass1 = "1.008 units";
//Helium
let name2 = "Helium";
let symbol2 = "He";
let atomconfig2 = "1s<sup>2</sup>";
let cgb2 = "Noble Gas";
let atomnos2 = "2";
let atommass2 = "4.003 units";
//Lithium
let name3 = "Lithium";
let symbol3 = "Li";
let atomconfig3 = "[He]2s<sup>1</sup>";
let cgb3 = "Alkali Metals";
let atomnos3 = "3";
let atommass3 = "6.94 units";
//Berrylium
let name4 = "Berrylium";
let symbol4 = "Be";
let atomconfig4 = "[He]2s<sup>2</sup>";
let cgb4 = "Alkaline Earth Metals";
let atomnos4 = "4";
let atommass4 = "9.012 units";
//Boron
let name5 = "Boron";
let symbol5 = "B";
let atomconfig5 = "[He]2s<sup>2</sup>2p<sup>1</sup>";
let cgb5 = "Metalloid";
let atomnos5 = "5";
let atommass5 = "10.81 units";
//Carbon
let name6 = "Carbon";
let symbol6 = "C";
let atomconfig6 = "[He]2s<sup>2</sup>2p<sup>2</sup>";
let cgb6 = "Non-Metal";
let atomnos6 = "6";
let atommass6 = "12.011	units";
//Nitrogen
let name7 = "Nitrogen";
let symbol7 = "N";
let atomconfig7 = "[He]2s<sup>2</sup>2p<sup>3</sup>";
let cgb7 = "Non-Metal";
let atomnos7 = "7";
let atommass7 = "14.007	units";
//Oxygen
let name8 = "Oxygen";
let symbol8 = "O";
let atomconfig8 = "[He]2s<sup>2</sup>2p<sup>4</sup>";
let cgb8 = "Non-Metal";
let atomnos8 = "8";
let atommass8 = "15.999	units";
//Fluorine
let name9 = "Fluorine";
let symbol9 = "F";
let atomconfig9 = "[He]2s<sup>2</sup>2p<sup>5</sup>";
let cgb9 = "Halogen";
let atomnos9 = "9";
let atommass9 = "18.998	units";
//Neon
let name10 = "Neon";
let symbol10 = "Ne";
let atomconfig10 = "[He]2s<sup>2</sup>2p<sup>6</sup>";
let cgb10 = "Noble Gas";
let atomnos10 = "10";
let atommass10 = "20.180 units";
//11-20
//Sodium
let name11 = "Sodium";
let symbol11 ="Na";
let atomconfig11 = "[Ne]3s<sup>1</sup>";
let cgb11 = "Alkali Metals";
let atomnos11 = "11";
let atommass11 = "22.990 units";
//Magnesium
let name12 = "Magnesium";
let symbol12 = "Mg";
let atomconfig12 = "[Ne]3s<sup>2</sup>";
let cgb12 = "Noble Gas";
let atomnos12 = "12";
let atommass12 = "24.305 units";
//Aluminum
let name13 = "Aluminum";
let symbol13 = "Al";
let atomconfig13 = "[Ne]3s<sup>2</sup>3p<sup>1</sup>";
let cgb13 = "Post-Transition Metal";
let atomnos13 = "13";
let atommass13 = "26.982 units";
//Silicon
let name14 = "Silicon";
let symbol14 = "Si";
let atomconfig14 = "[Ne]3s<sup>2</sup>3p<sup>2</sup>";
let cgb14 = "Metalloid";
let atomnos14 = "14";
let atommass14 = "28.085 units";
//Phosphorus
let name15 = "Phosphorus";
let symbol15 = "P";
let atomconfig15 = "[Ne]3s<sup>2</sup>3p<sup>3</sup>";
let cgb15 = "Non-Metal";
let atomnos15 = "15";
let atommass15 = "30.974 units";
//Sulfur
let name16 = "Sulfur";
let symbol16 = "S";
let atomconfig16 = "[Ne]3s<sup>2</sup>3p<sup>4</sup>";
let cgb16 = "Non-Metal";
let atomnos16 = "16";
let atommass16 = "32.06 units";
//Chlorine
let name17 = "Chlorine";
let symbol17 = "Cl";
let atomconfig17 = "[Ne]3s<sup>2</sup>3p<sup>5</sup>";
let cgb17 = "Halogen";
let atomnos17 = "17";
let atommass17 = "35.45 units";
//Argon
let name18 = "Argon";
let symbol18 = "Ar";
let atomconfig18 = "[Ne]3s<sup>2</sup>3p<sup>6</sup>";
let cgb18 = "Noble Gas";
let atomnos18 = "18";
let atommass18 = "39.95 units";
//Potassium
let name19 = "Potassium";
let symbol19 = "K";
let atomconfig19 = "[Ar]4s<sup>1</sup>";
let cgb19 = "Alkali Metals";
let atomnos19 = "19";
let atommass19 = "39.098 units";
//Calcium
let name20 = "Calcium";
let symbol20 = "Ca";
let atomconfig20 = "[Ar]4s<sup>2</sup>";
let cgb20 = "Alkaline Earth Metals";
let atomnos20 = "20";
let atommass20 = "40.078 units";
//21-30
//Scandium
let name21 = "Scandium";
let symbol21 ="Sc";
let atomconfig21 = "[Ar]3d<sup>1</sup>4s<sup>2</sup>";
let cgb21 = "Transition Metal";
let atomnos21 = "21";
let atommass21 = "44.956 units";
//Titanium
let name22 = "Titanium";
let symbol22 = "Ti";
let atomconfig22 = "[Ar]3d<sup>2</sup>4s<sup>2</sup>";
let cgb22 = "Transition Metal";
let atomnos22 = "22";
let atommass22 = "47.867 units";
//Vanadium
let name23 = "Vanadium";
let symbol23 = "V";
let atomconfig23 = "[Ar]3d<sup>3</sup>4s<sup>2</sup>";
let cgb23 = "Transition Metal";
let atomnos23 = "23";
let atommass23 = "50.942 units";
//Chromium
let name24 = "Chromium";
let symbol24 = "Cr";
let atomconfig24 = "[Ar]3d<sup>4</sup>4s<sup>2</sup>";
let cgb24 = "Transition Metal";
let atomnos24 = "24";
let atommass24 = "51.996 units";
//Manganese
let name25 = "Manganese";
let symbol25 = "Mn";
let atomconfig25 = "[Ar]3d<sup>5</sup>4s<sup>2</sup>";
let cgb25 = "Transition Metal";
let atomnos25 = "25";
let atommass25 = "54.938 units";
//Iron
let name26 = "Iron";
let symbol26 = "Fe";
let atomconfig26 = "[Ar]3d<sup>6</sup>4s<sup>2</sup>";
let cgb26 = "Transition Metal";
let atomnos26 = "26";
let atommass26 = "55.845 units";
//Cobalt
let name27 = "Cobalt";
let symbol27 = "Co";
let atomconfig27 = "[Ar]3d<sup>7</sup>4s<sup>2</sup>";
let cgb27 = "Transition Metal";
let atomnos27 = "27";
let atommass27 = "58.933 units";
//Nickel
let name28 = "Nickel";
let symbol28 = "Ni";
let atomconfig28 = "[Ar]3d<sup>8</sup>4s<sup>2</sup>";
let cgb28 = "Transition Metal";
let atomnos28 = "28";
let atommass28 = "58.693 units";
//Copper
let name29 = "Copper";
let symbol29 = "Cu";
let atomconfig29 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>";
let cgb29 = "Transition Metal";
let atomnos29 = "29";
let atommass29 = "63.546 units";
//Zinc
let name30 = "Zinc";
let symbol30 = "Zn";
let atomconfig30 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>";
let cgb30 = "Transition Metal";
let atomnos30 = "30";
let atommass30 = "65.38 units";

//31-40
//Gallium
let name31 = "Gallium";
let symbol31 ="Ga";
let atomconfig31 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>";
let cgb31 = "Post Transition Metal";
let atomnos31 = "31";
let atommass31 = "69.723 units";
//Germanium
let name32 = "Germanium";
let symbol32 = "Ge";
let atomconfig32 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup>";
let cgb32 = "Metalloid";
let atomnos32 = "32";
let atommass32 = "72.630 units";
//Arsenic
let name33 = "Arsenic";
let symbol33 = "As";
let atomconfig33 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>";
let cgb33 = "Metalloid";
let atomnos33 = "33";
let atommass33 = "74.922 units";
//Selenium
let name34 = "Selenium";
let symbol34 = "Se";
let atomconfig34 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>";
let cgb34 = "Non-Metal";
let atomnos34 = "34";
let atommass34 = "78.971 units";
//Bromine
let name35 = "Bromine";
let symbol35 = "Br";
let atomconfig35 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>";
let cgb35 = "Halogen";
let atomnos35 = "35";
let atommass35 = "79.904 units";
//Krypton
let name36 = "Krypton";
let symbol36 = "Kr";
let atomconfig36 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup>";
let cgb36 = "Noble Gas";
let atomnos36 = "36";
let atommass36 = "83.798 units";
//Rubidium
let name37 = "Rubidium";
let symbol37 = "Rb";
let atomconfig37 = "[Kr]5s<sup>1</sup>";
let cgb37 = "Alkali Metals";
let atomnos37 = "37";
let atommass37 = "85.468 units";
//Strontium
let name38 = "Strontium";
let symbol38 = "St";
let atomconfig38 = "[Kr]5s<sup>2</sup>";
let cgb38 = "Alkaline Earth Metals";
let atomnos38 = "38";
let atommass38 = "87.62 units";
//Yttrium
let name39 = "Yttrium";
let symbol39 = "Y";
let atomconfig39 = "[Kr]4d<sup>1</4d>5s<sup>2</sup>";
let cgb39 = "Transition Metal";
let atomnos39 = "39";
let atommass39 = "88.906 units";
//Zirconium
let name40 = "Zirconium";
let symbol40 = "Zr";
let atomconfig40 = "[Kr]4d<sup>2</4d>5s<sup>2</sup>";
let cgb40 = "Transition Metal";
let atomnos40 = "40";
let atommass40 = "91.224 units";

//41-50
//Niobium
let name41 = "Niobium";
let symbol41 ="Nb";
let atomconfig41 = "[Kr]4d<sup>4</sup>5s<sup>1</sup>";
let cgb41 = "Transition Metal";
let atomnos41 = "41";
let atommass41 = "92.906 units";
//Molybdenum
let name42 = "Molybdenum";
let symbol42 = "Mo";
let atomconfig42 = "[Kr]4d<sup>5</sup>5s<sup>1</sup>";
let cgb42 = "Transition Metal";
let atomnos42 = "42";
let atommass42 = "95.95 units";
//Technetium
let name43 = "Technetium";
let symbol43 = "Tc";
let atomconfig43 = "[Kr]4d<sup>5</sup>5s<sup>2</sup>";
let cgb43 = "Transition Metal";
let atomnos43 = "43";
let atommass43 = "98 units";
//Ruthenium
let name44 = "Ruthenium";
let symbol44 = "Ru";
let atomconfig44 = "[Kr]4d<sup>7</sup>5s<sup>1</sup>";
let cgb44 = "Transition Metal";
let atomnos44 = "44";
let atommass44 = "101.07 units";
//Rhodium
let name45 = "Rhodium";
let symbol45 = "Rh";
let atomconfig45 = "[Kr]4d<sup>8</sup>5s<sup>1</sup>4p<sup>5</sup>";
let cgb45 = "Transtion Metal";
let atomnos45 = "45";
let atommass45 = "102.906 units";
//Palladium
let name46 = "Palladium";
let symbol46 = "Pd";
let atomconfig46 = "[Kr]4d<sup>10</sup>";
let cgb46 = "Transition Metal";
let atomnos46 = "46";
let atommass46 = "106.42 units";
//Silver
let name47 = "Silver";
let symbol47 = "Ag";
let atomconfig47 = "[Kr]4d<sup>10</sup>5s<sup>1</sup>";
let cgb47 = "Transtion Metal";
let atomnos47 = "47";
let atommass47 = "107.868 units";
//Cadmium
let name48 = "Cadmium";
let symbol48 = "Cd";
let atomconfig48 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>";
let cgb48 = "Transition Metal";
let atomnos48 = "48";
let atommass48 = "112.414 units";
//Indium
let name49 = "Indium";
let symbol49 = "In";
let atomconfig49 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup>";
let cgb49 = "Post Transition Metal";
let atomnos49 = "49";
let atommass49 = "114.818 units";
//Tin
let name50 = "Tin";
let symbol50 = "Sn";
let atomconfig50 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup>";
let cgb50 = "Post Transition Metal";
let atomnos50 = "50";
let atommass50 = "118.710 units";

//51-60
//Antimony
let name51 = "Tin";
let symbol51 = "Sb";
let atomconfig51 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup>";
let cgb51 = "Metalloid";
let atomnos51 = "51";
let atommass51 = "121.760 units";
//Tellurium
let name52 = "Tellurium";
let symbol52 = "Te";
let atomconfig52 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup>";
let cgb52 = "Metalloid";
let atomnos52 = "52";
let atommass52 = "127.60 units";
//Iodine
let name53 = "Iodine";
let symbol53 = "I";
let atomconfig53 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup>";
let cgb53 = "Halogen";
let atomnos53 = "53";
let atommass53 = "126.904 units";
//Xenon
let name54 = "Xenon";
let symbol54 = "Xe";
let atomconfig54 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup>";
let cgb54 = "Noble Gas";
let atomnos54 = "54";
let atommass54 = "131.293 units";
//Caesium
let name55 = "Caesium";
let symbol55 = "Cs";
let atomconfig55 = "[Xe]6s<sup>1</sup>";
let cgb55 = "Alkali Metals";
let atomnos55 = "55";
let atommass55 = "132.905 units";
//Barium
let name56 = "Barium";
let symbol56 = "Ba";
let atomconfig56 = "[Xe]6s<sup>2</sup>";
let cgb56 = "Alkaline Earth Metal";
let atomnos56 = "56";
let atommass56 = "137.327 units";
//Lanthanum
let name57 = "Lanthanum";
let symbol57 = "La";
let atomconfig57 = "[Xe]5d<sup>1</sup>6s<sup>2</sup>";
let cgb57 = "Lanthanide";
let atomnos57 = "57";
let atommass57 = "138.905 units";
//Cerium
let name58 = "Cerium";
let symbol58 = "Ce";
let atomconfig58 = "[Xe]4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup>";
let cgb58 = "Lanthanide";
let atomnos58 = "58";
let atommass58 = "140.116 units";
//Praseodymium
let name59 = "Praseodymium";
let symbol59 = "Pr";
let atomconfig59 = "[Xe]4f<sup>3</sup>6s<sup>2</sup>";
let cgb59 = "Lanthanide";
let atomnos59 = "59";
let atommass59 = "140.908 units";
//Neodymium
let name60 = "Neodymium";
let symbol60 = "Nd";
let atomconfig60 = "[Xe]4f<sup>4</sup>6s<sup>2</sup>";
let cgb60 = "Lanthanide";
let atomnos60 = "60";
let atommass60 = "144.242 units";

//61-70
//Promethium
let name61 = "Promethium";
let symbol61 = "Pm";
let atomconfig61 = "[Xe]4f<sup>5</sup>6s<sup>2</sup>";
let cgb61 = "Lanthanide";
let atomnos61 = "61";
let atommass61 = "145 units";
//Samarium
let name62 = "Samarium";
let symbol62 = "Sm";
let atomconfig62 = "[Xe]4f<sup>6</sup>6s<sup>2</sup>";
let cgb62 = "Lanthanide";
let atomnos62 = "62";
let atommass62 = "127.60 units";
//Europium
let name63 = "Europium";
let symbol63 = "Eu";
let atomconfig63 = "[Xe]4f<sup>7</sup>6s<sup>2</sup>";
let cgb63 = "Lanthanide";
let atomnos63 = "63";
let atommass63 = "151.964 units";
//Gadolinium
let name64 = "Gadolinium";
let symbol64 = "Gd";
let atomconfig64 = "[Xe]4f<sup>8</sup>6s<sup>2</sup>";
let cgb64 = "Lanthanide";
let atomnos64 = "64";
let atommass64 = "157.25 units";
//Terbium
let name65 = "Terbium";
let symbol65 = "Cs";
let atomconfig65 = "[Xe]4f<sup>9</sup>6s<sup>2</sup>";
let cgb65 = "Lanthanide";
let atomnos65 = "65";
let atommass65 = "158.925 units";
//Dysprosium
let name66 = "Dysprosium";
let symbol66 = "Dy";
let atomconfig66 = "[Xe]4f<sup>10</sup>6s<sup>2</sup>";
let cgb66 = "Lanthanide";
let atomnos66 = "66";
let atommass66 = "162.500 units";
//Holmium
let name67 = "Holmium";
let symbol67 = "Ho";
let atomconfig67 = "[Xe]4f<sup>11</sup>6s<sup>2</sup>";
let cgb67 = "Lanthanide";
let atomnos67 = "67";
let atommass67 = "164.930 units";
//Erbium
let name68 = "Erbium";
let symbol68 = "Er";
let atomconfig68 = "[Xe]4f<sup>12</sup>6s<sup>2</sup>";
let cgb68 = "Lanthanide";
let atomnos68 = "68";
let atommass68 = "167.259 units";
//Thulium
let name69 = "Thulium";
let symbol69 = "Tm";
let atomconfig69 = "[Xe]4f<sup>13</sup>6s<sup>2</sup>";
let cgb69 = "Lanthanide";
let atomnos69 = "69";
let atommass69 = "168.934 units";
//Ytterbium
let name70 = "Ytterbium";
let symbol70 = "Yb";
let atomconfig70 = "[Xe]4f<sup>14</sup>6s<sup>2</sup>";
let cgb70 = "Lanthanide";
let atomnos70 = "70";
let atommass70 = "173.045 units";
//71-80
//Lutetium
let name71 = "Lutetium";
let symbol71 = "Lu";
let atomconfig71 = "[Xe]4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup>";
let cgb71 = "Lanthanide";
let atomnos71 = "71";
let atommass71 = "174.967 units";
//Hafnium
let name72 = "Hafnium";
let symbol72 = "Hf";
let atomconfig72 = "[Xe]4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup>";
let cgb72 = "Transition Metal";
let atomnos72 = "72";
let atommass72 = "178.49 units";
//Tantalum
let name73 = "Tantalum";
let symbol73 = "Ta";
let atomconfig73 = "[Xe]4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup>";
let cgb73 = "Transition Metal";
let atomnos73 = "73";
let atommass73 = "180.948 units";
//Tungsten
let name74 = "Tungsten";
let symbol74 = "W";
let atomconfig74 = "[Xe]4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup>";
let cgb74 = "Transition Metal";
let atomnos74 = "74";
let atommass74 = "180.948 units";
//Rhenium
let name75 = "Rhenium";
let symbol75 = "Re";
let atomconfig75 = "[Xe]4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup>";
let cgb75 = "Transtion Metal";
let atomnos75 = "75";
let atommass75 = "158.925 units";
//Osmium
let name76 = "Osmium";
let symbol76 = "Os";
let atomconfig76 = "[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>";
let cgb76 = "Transition Metal";
let atomnos76 = "76";
let atommass76 = "190.23 units";
//Iridium
let name77 = "Iridium";
let symbol77 = "Ir";
let atomconfig77 = "[Xe]4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup>";
let cgb77 = "Transition Metal";
let atomnos77 = "77";
let atommass77 = "192.217 units";
//Platinum
let name78 = "Platinum";
let symbol78 = "Pt";
let atomconfig78 = "[Xe]4f<sup>14</sup>5d<sup>8</sup>6s<sup>2</sup>";
let cgb78 = "Transtion Metal";
let atomnos78 = "78";
let atommass78 = "195.084 units";
//Gold
let name79 = "Gold";
let symbol79 = "Au";
let atomconfig79 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup>";
let cgb79 = "Transition Metal";
let atomnos79 = "79";
let atommass79 = "196.967 units";
//Mercury
let name80 = "Mercury";
let symbol80 = "Hg";
let atomconfig80 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>";
let cgb80 = "Transition Metal";
let atomnos80 = "80";
let atommass80 = "200.592 units";
//81-90
//Thallium
let name81 = "Thallium";
let symbol81 = "Tl";
let atomconfig81 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup>";
let cgb81 = "Post Transition Metal";
let atomnos81 = "81";
let atommass81 = "204.38 units";
//Lead
let name82 = "Lead";
let symbol82 = "Pb";
let atomconfig82 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup>";
let cgb82 = "Post Transition Metal";
let atomnos82 = "82";
let atommass82 = "207.2 units";
//Bismoth
let name83 = "Bismoth";
let symbol83 = "Bi";
let atomconfig83 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup>";
let cgb83 = "Post Transition Metal";
let atomnos83 = "83";
let atommass83 = "208.980 units";
//Polonium
let name84 = "Polonium";
let symbol84 = "Po";
let atomconfig84 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup>";
let cgb84 = "Metalloid";
let atomnos84 = "84";
let atommass84 = "209 units";
//Astatine
let name85 = "Astatine";
let symbol85 = "At";
let atomconfig85 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup>";
let cgb85 = "Halogen";
let atomnos85 = "85";
let atommass85 = "210 units";
//Radon
let name86 = "Radon";
let symbol86 = "Rn";
let atomconfig86 = "[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>6p<sup>6</sup>";
let cgb86 = "Noble Gas";
let atomnos86 = "86";
let atommass86 = "222 units";
//Francium
let name87 = "Francium";
let symbol87 = "Fr";
let atomconfig87 = "[Rn]7s<sup>1</sup>";
let cgb87 = "Alkali Metal";
let atomnos87 = "87";
let atommass87 = "223 units";
//Radium
let name88 = "Radium";
let symbol88 = "Ra";
let atomconfig88 = "[Rn]7s<sup>2</sup>";
let cgb88 = "Alkaline Earth Metal";
let atomnos88 = "88";
let atommass88 = "226 units";
//Actinium
let name89 = "Actinium";
let symbol89 = "Ac";
let atomconfig89 = "[Rn]6d<sup>1</sup>7s<sup>2</sup>";
let cgb89 = "Actinide";
let atomnos89 = "89";
let atommass89 = "227 units";
//Thorium
let name90 = "Thorium";
let symbol90 = "Th";
let atomconfig90 = "[Rn]6d<sup>2</sup>7s<sup>2</sup>";
let cgb90 = "Actinide";
let atomnos90 = "90";
let atommass90 = "232.038 units";
//91-100
//Protactinium
let name91 = "Protactinium";
let symbol91 = "Pa";
let atomconfig91 = "[Rn]5f<sup>2</sup>6d<sup>1</sup>7s<sup>2</sup>";
let cgb91 = "Actinide";
let atomnos91 = "91";
let atommass91 = "231.36 units";
//Uranium
let name92 = "Uranium";
let symbol92 = "U";
let atomconfig92 = "[Rn]5f<sup>3</sup>6d<sup>1</sup>7s<sup>2</sup>";
let cgb92 = "Actinide";
let atomnos92 = "92";
let atommass92 = "238.029 units";
//Neptunium
let name93 = "Neptunium";
let symbol93 = "Np";
let atomconfig93 = "[Rn]5f<sup>4</sup>6d<sup>1</sup>7s<sup>2</sup>";
let cgb93 = "Actinide";
let atomnos93 = "93";
let atommass93 = "237 units";
//Plutonium
let name94 = "Plutonium";
let symbol94 = "Pu";
let atomconfig94 = "[Rn]5f<sup>6</sup>7s<sup>2</sup>";
let cgb94 = "Actinide";
let atomnos94 = "94";
let atommass94 = "244 units";
//Americium
let name95 = "Americium";
let symbol95 = "Am";
let atomconfig95 = "[Rn]5f<sup>7</sup>7s<sup>2</sup>";
let cgb95 = "Actinide";
let atomnos95 = "95";
let atommass95 = "243 units";
//Curium
let name96 = "Curium";
let symbol96 = "Cm";
let atomconfig96 = "[Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup>";
let cgb96 = "Actinide";
let atomnos96 = "96";
let atommass96 = "247 units";
//Berkelium
let name97 = "Berkelium";
let symbol97 = "Bk";
let atomconfig97 = "[Rn]5f<sup>9</sup>7s<sup>2</sup>";
let cgb97 = "Actinide";
let atomnos97 = "97";
let atommass97 = "247 units";
//Californium
let name98 = "Californium";
let symbol98 = "Cf";
let atomconfig98 = "[Rn]5f<sup>10</sup>7s<sup>2</sup>";
let cgb98 = "Actinide";
let atomnos98 = "98";
let atommass98 = "251 units";
//Einsteinium
let name99 = "Einsteinium";
let symbol99 = "Es";
let atomconfig99 = "[Rn]5f<sup>11</sup>7s<sup>2</sup>";
let cgb99 = "Actinide";
let atomnos99 = "99";
let atommass99 = "252 units";
//Fermium
let name100 = "Fermium";
let symbol100 = "Fm";
let atomconfig100 = "[Rn]5f<sup>12</sup>7s<sup>2</sup>";
let cgb100 = "Actinide";
let atomnos100 = "100";
let atommass100 = "257 units";
//101-110
//Mendelevium
let name101 = "Mendelevium";
let symbol101 = "Md";
let atomconfig101 = "[Rn]5f<sup>13</sup>7s<sup>2</sup>";
let cgb101 = "Actinide";
let atomnos101 = "101";
let atommass101 = "258 units";
//Nobelium
let name102 = "Nobelium";
let symbol102 = "No";
let atomconfig102 = "[Rn]5f<sup>14</sup>7s<sup>2</sup>";
let cgb102 = "Actinide";
let atomnos102 = "102";
let atommass102 = "259 units";
//Lawrencium
let name103 = "Lawrencium";
let symbol103 = "Lr";
let atomconfig103 = "[Rn]5f<sup>14</sup>7s<sup>2</sup>7p<sup>1</sup>";
let cgb103 = "Actinide";
let atomnos103 = "103";
let atommass103 = "262 units";
//Rutherfordium
let name104 = "Rutherfordium";
let symbol104 = "Rf";
let atomconfig104 = "[Rn]5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup>";
let cgb104 = "Transition Metal";
let atomnos104 = "104";
let atommass104 = "267 units";
//Dubnium
let name105 = "Dubnium";
let symbol105 = "Db";
let atomconfig105 = "[Rn]5f<sup>14</sup>6d<sup>3</sup>7s<sup>2</sup>";
let cgb105 = "Transition Metal";
let atomnos105 = "105";
let atommass105 = "268 units";
//Seaborgium
let name106 = "Seaborgium";
let symbol106 = "Sg";
let atomconfig106 = "[Rn]5f<sup>7</sup>6d<sup>4</sup>7s<sup>2</sup>";
let cgb106 = "Transition Metal";
let atomnos106 = "106";
let atommass106 = "269 units";
//Bohrium
let name107 = "Bohrium";
let symbol107 = "Bh";
let atomconfig107 = "[Rn]5f<sup>7</sup>6d<sup>5</sup>7s<sup>2</sup>";
let cgb107 = "Transition Metal";
let atomnos107 = "107";
let atommass107 = "270 units";
//Hassium
let name108 = "Hassium";
let symbol108 = "Hs";
let atomconfig108 = "[Rn]5f<sup>7</sup>6d<sup>6</sup>7s<sup>2</sup>";
let cgb108 = "Transition Metal";
let atomnos108 = "108";
let atommass108 = "269 units";
//Meitnerium
let name109 = "Mertnerium";
let symbol109 = "Mt";
let atomconfig109 = "[Rn]5f<sup>7</sup>6d<sup>7</sup>7s<sup>2</sup>";
let cgb109 = "Transtion Metal";
let atomnos109 = "109";
let atommass109 = "278 units";
//Darmstadtium
let name110 = "Darmstadtium";
let symbol110 = "Ds";
let atomconfig110 = "[Rn]5f<sup>7</sup>6d<sup>9</sup>7s<sup>1</sup>";
let cgb110 = "Transition Metal";
let atomnos110 = "110";
let atommass110 = "281 units";
//111-118
//Roentgenium
let name111 = "Roentgenium";
let symbol111 = "Rg";
let atomconfig111 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>1</sup>";
let cgb111 = "Transition Metal";
let atomnos111 = "111";
let atommass111 = "280 units";
//Copernicium
let name112 = "Copernicium";
let symbol112 = "Cn";
let atomconfig112 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>";
let cgb112 = "Transition Metal";
let atomnos112 = "112";
let atommass112 = "285 units";
//Nihonium
let name113 = "Nihonium";
let symbol113 = "Nh";
let atomconfig113 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>1</sup>";
let cgb113 = "Post Transition Metal";
let atomnos113 = "113";
let atommass113 = "286 units";
//Flerovium
let name114 = "Flerovium";
let symbol114 = "Fl";
let atomconfig114 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>2</sup>";
let cgb114 = "Post Transition Metal";
let atomnos114 = "114";
let atommass114 = "289 units";
//Moscovium
let name115 = "Moscovium";
let symbol115 = "Mc";
let atomconfig115 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>3</sup>";
let cgb115 = "Post Transition Metal";
let atomnos115 = "115";
let atommass115 = "289 units";
//Livermorium
let name116 = "Livermorium";
let symbol116 = "Lv";
let atomconfig116 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>4</sup>";
let cgb116 = "Post Transition Metal";
let atomnos116 = "116";
let atommass116 = "293 units";
//Tennessine
let name117 = "Tennessine";
let symbol117 = "Ts";
let atomconfig117 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>5</sup>";
let cgb117 = "Halogen";
let atomnos117 = "117";
let atommass117 = "294 units";
//Oganesson
let name118 = "Oganesson";
let symbol118 = "Og";
let atomconfig118 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>6</sup>";
let cgb118 = "Noble Gas";
let atomnos118 = "118";
let atommass118 = "294 units";



//Data Processor
//1-10
function hydrogen() {
    epname.innerHTML = name1;
    epsymbol.innerHTML = symbol1;
    epac.innerHTML = atomconfig1;
    epcgb.innerHTML = cgb1;
    epan.innerHTML = atomnos1;
    epam.innerHTML = atommass1;
    epcc.style.backgroundColor = cc_nm;hideRi();
    next.disabled = false;
}
function helium() {
    epname.innerHTML = name2
    epsymbol.innerHTML = symbol2;
    epac.innerHTML = atomconfig2;
    epcgb.innerHTML = cgb2;
    epan.innerHTML = atomnos2;
    epam.innerHTML = atommass2;
    epcc.style.backgroundColor = cc_ng;hideRi();
}
function lithium() {
    epname.innerHTML = name3;
    epsymbol.innerHTML = symbol3;
    epac.innerHTML = atomconfig3;
    epcgb.innerHTML = cgb3;
    epan.innerHTML = atomnos3;
    epam.innerHTML = atommass3;
    epcc.style.backgroundColor = cc_am;hideRi();
}
function berrylium() {
    epname.innerHTML = name4
    epsymbol.innerHTML = symbol4;
    epac.innerHTML = atomconfig4;
    epcgb.innerHTML = cgb4;
    epan.innerHTML = atomnos4;
    epam.innerHTML = atommass4;
    epcc.style.backgroundColor = cc_aem;hideRi();
}
function boron() {
    epname.innerHTML = name5;
    epsymbol.innerHTML = symbol5;
    epac.innerHTML = atomconfig5;
    epcgb.innerHTML = cgb5;
    epan.innerHTML = atomnos5;
    epam.innerHTML = atommass5;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function carbon() {
    epname.innerHTML = name6
    epsymbol.innerHTML = symbol6;
    epac.innerHTML = atomconfig6;
    epcgb.innerHTML = cgb6;
    epan.innerHTML = atomnos6;
    epam.innerHTML = atommass6;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function nitrogen() {
    epname.innerHTML = name7;
    epsymbol.innerHTML = symbol7;
    epac.innerHTML = atomconfig7;
    epcgb.innerHTML = cgb7;
    epan.innerHTML = atomnos7;
    epam.innerHTML = atommass7;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function oxygen() {
    epname.innerHTML = name8
    epsymbol.innerHTML = symbol8;
    epac.innerHTML = atomconfig8;
    epcgb.innerHTML = cgb8;
    epan.innerHTML = atomnos8;
    epam.innerHTML = atommass8;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function fluorine() {
    epname.innerHTML = name9;
    epsymbol.innerHTML = symbol9;
    epac.innerHTML = atomconfig9;
    epcgb.innerHTML = cgb9;
    epan.innerHTML = atomnos9;
    epam.innerHTML = atommass9;
    epcc.style.backgroundColor = cc_h;hideRi();
}
function neon() {
    epname.innerHTML = name10
    epsymbol.innerHTML = symbol10;
    epac.innerHTML = atomconfig10;
    epcgb.innerHTML = cgb10;
    epan.innerHTML = atomnos10;
    epam.innerHTML = atommass10;
    epcc.style.backgroundColor = cc_ng;hideRi();
}
//11-20
function sodium() {
    epname.innerHTML = name11;
    epsymbol.innerHTML = symbol11;
    epac.innerHTML = atomconfig11;
    epcgb.innerHTML = cgb11;
    epan.innerHTML = atomnos11;
    epam.innerHTML = atommass11;
    epcc.style.backgroundColor = cc_am;hideRi();
}
function magnesium() {
    epname.innerHTML = name12
    epsymbol.innerHTML = symbol12;
    epac.innerHTML = atomconfig12;
    epcgb.innerHTML = cgb12;
    epan.innerHTML = atomnos12;
    epam.innerHTML = atommass12;
    epcc.style.backgroundColor = cc_aem;hideRi();
}
function aluminum() {
    epname.innerHTML = name13;
    epsymbol.innerHTML = symbol13;
    epac.innerHTML = atomconfig13;
    epcgb.innerHTML = cgb13;
    epan.innerHTML = atomnos13;
    epam.innerHTML = atommass13;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function silicon() {
    epname.innerHTML = name14
    epsymbol.innerHTML = symbol14;
    epac.innerHTML = atomconfig14;
    epcgb.innerHTML = cgb14;
    epan.innerHTML = atomnos14;
    epam.innerHTML = atommass14;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function phosphorus() {
    epname.innerHTML = name15;
    epsymbol.innerHTML = symbol15;
    epac.innerHTML = atomconfig15;
    epcgb.innerHTML = cgb15;
    epan.innerHTML = atomnos15;
    epam.innerHTML = atommass15;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function sulfur() {
    epname.innerHTML = name16
    epsymbol.innerHTML = symbol16;
    epac.innerHTML = atomconfig16;
    epcgb.innerHTML = cgb16;
    epan.innerHTML = atomnos16;
    epam.innerHTML = atommass16;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function chlorine() {
    epname.innerHTML = name17;
    epsymbol.innerHTML = symbol17;
    epac.innerHTML = atomconfig17;
    epcgb.innerHTML = cgb17;
    epan.innerHTML = atomnos17;
    epam.innerHTML = atommass17;
    epcc.style.backgroundColor = cc_h;hideRi();
}
function argon() {
    epname.innerHTML = name18
    epsymbol.innerHTML = symbol18;
    epac.innerHTML = atomconfig18;
    epcgb.innerHTML = cgb18;
    epan.innerHTML = atomnos18;
    epam.innerHTML = atommass18;
    epcc.style.backgroundColor = cc_ng;hideRi();
}
function potassium() {
    epname.innerHTML = name19;
    epsymbol.innerHTML = symbol19;
    epac.innerHTML = atomconfig19;
    epcgb.innerHTML = cgb19;
    epan.innerHTML = atomnos19;
    epam.innerHTML = atommass19;
    epcc.style.backgroundColor = cc_am;hideRi();
}
function calcium() {
    epname.innerHTML = name20
    epsymbol.innerHTML = symbol20;
    epac.innerHTML = atomconfig20;
    epcgb.innerHTML = cgb20;
    epan.innerHTML = atomnos20;
    epam.innerHTML = atommass20;
    epcc.style.backgroundColor = cc_aem;hideRi();
}
//21-30
function scandium() {
    epname.innerHTML = name21;
    epsymbol.innerHTML = symbol21;
    epac.innerHTML = atomconfig21;
    epcgb.innerHTML = cgb21;
    epan.innerHTML = atomnos21;
    epam.innerHTML = atommass21;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function titanium() {
    epname.innerHTML = name22
    epsymbol.innerHTML = symbol22;
    epac.innerHTML = atomconfig22;
    epcgb.innerHTML = cgb22;
    epan.innerHTML = atomnos22;
    epam.innerHTML = atommass22;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function vanadium() {
    epname.innerHTML = name23;
    epsymbol.innerHTML = symbol23;
    epac.innerHTML = atomconfig23;
    epcgb.innerHTML = cgb23;
    epan.innerHTML = atomnos23;
    epam.innerHTML = atommass23;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function chromium() {
    epname.innerHTML = name24
    epsymbol.innerHTML = symbol24;
    epac.innerHTML = atomconfig24;
    epcgb.innerHTML = cgb24;
    epan.innerHTML = atomnos24;
    epam.innerHTML = atommass24;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function manganese() {
    epname.innerHTML = name25;
    epsymbol.innerHTML = symbol25;
    epac.innerHTML = atomconfig25;
    epcgb.innerHTML = cgb25;
    epan.innerHTML = atomnos25;
    epam.innerHTML = atommass25;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function iron() {
    epname.innerHTML = name26
    epsymbol.innerHTML = symbol26;
    epac.innerHTML = atomconfig26;
    epcgb.innerHTML = cgb26;
    epan.innerHTML = atomnos26;
    epam.innerHTML = atommass26;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function cobalt() {
    epname.innerHTML = name27;
    epsymbol.innerHTML = symbol27;
    epac.innerHTML = atomconfig27;
    epcgb.innerHTML = cgb27;
    epan.innerHTML = atomnos27;
    epam.innerHTML = atommass27;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function nickel() {
    epname.innerHTML = name28
    epsymbol.innerHTML = symbol28;
    epac.innerHTML = atomconfig28;
    epcgb.innerHTML = cgb28;
    epan.innerHTML = atomnos28;
    epam.innerHTML = atommass28;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function copper() {
    epname.innerHTML = name29;
    epsymbol.innerHTML = symbol29;
    epac.innerHTML = atomconfig29;
    epcgb.innerHTML = cgb29;
    epan.innerHTML = atomnos29;
    epam.innerHTML = atommass29;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function zinc() {
    epname.innerHTML = name30
    epsymbol.innerHTML = symbol30;
    epac.innerHTML = atomconfig30;
    epcgb.innerHTML = cgb30;
    epan.innerHTML = atomnos30;
    epam.innerHTML = atommass30;
    epcc.style.backgroundColor = cc_tm;hideRi();
}

//31-40
function gallium() {
    epname.innerHTML = name31;
    epsymbol.innerHTML = symbol31;
    epac.innerHTML = atomconfig31;
    epcgb.innerHTML = cgb31;
    epan.innerHTML = atomnos31;
    epam.innerHTML = atommass31;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function germanium() {
    epname.innerHTML = name32
    epsymbol.innerHTML = symbol32;
    epac.innerHTML = atomconfig32;
    epcgb.innerHTML = cgb32;
    epan.innerHTML = atomnos32;
    epam.innerHTML = atommass32;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function arsenic() {
    epname.innerHTML = name33;
    epsymbol.innerHTML = symbol33;
    epac.innerHTML = atomconfig33;
    epcgb.innerHTML = cgb33;
    epan.innerHTML = atomnos33;
    epam.innerHTML = atommass33;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function selenium() {
    epname.innerHTML = name34
    epsymbol.innerHTML = symbol34;
    epac.innerHTML = atomconfig34;
    epcgb.innerHTML = cgb34;
    epan.innerHTML = atomnos34;
    epam.innerHTML = atommass34;
    epcc.style.backgroundColor = cc_nm;hideRi();
}
function bromine() {
    epname.innerHTML = name35;
    epsymbol.innerHTML = symbol35;
    epac.innerHTML = atomconfig35;
    epcgb.innerHTML = cgb35;
    epan.innerHTML = atomnos35;
    epam.innerHTML = atommass35;
    epcc.style.backgroundColor = cc_h;hideRi();
}
function krypton() {
    epname.innerHTML = name36
    epsymbol.innerHTML = symbol36;
    epac.innerHTML = atomconfig36;
    epcgb.innerHTML = cgb36;
    epan.innerHTML = atomnos36;
    epam.innerHTML = atommass36;
    epcc.style.backgroundColor = cc_ng;hideRi();
}
function rubidium() {
    epname.innerHTML = name37;
    epsymbol.innerHTML = symbol37;
    epac.innerHTML = atomconfig37;
    epcgb.innerHTML = cgb37;
    epan.innerHTML = atomnos37;
    epam.innerHTML = atommass37;
    epcc.style.backgroundColor = cc_am;hideRi();
}
function strontium() {
    epname.innerHTML = name38
    epsymbol.innerHTML = symbol38;
    epac.innerHTML = atomconfig38;
    epcgb.innerHTML = cgb38;
    epan.innerHTML = atomnos38;
    epam.innerHTML = atommass38;
    epcc.style.backgroundColor = cc_aem;hideRi();
}
function yttrium() {
    epname.innerHTML = name39;
    epsymbol.innerHTML = symbol39;
    epac.innerHTML = atomconfig39;
    epcgb.innerHTML = cgb39;
    epan.innerHTML = atomnos39;
    epam.innerHTML = atommass39;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function zirconium() {
    epname.innerHTML = name40
    epsymbol.innerHTML = symbol40;
    epac.innerHTML = atomconfig40;
    epcgb.innerHTML = cgb40;
    epan.innerHTML = atomnos40;
    epam.innerHTML = atommass40;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
//41-50
function niobium() {
    epname.innerHTML = name41;
    epsymbol.innerHTML = symbol41;
    epac.innerHTML = atomconfig41;
    epcgb.innerHTML = cgb41;
    epan.innerHTML = atomnos41;
    epam.innerHTML = atommass41;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function molybdenum() {
    epname.innerHTML = name42
    epsymbol.innerHTML = symbol42;
    epac.innerHTML = atomconfig42;
    epcgb.innerHTML = cgb42;
    epan.innerHTML = atomnos42;
    epam.innerHTML = atommass42;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function technetium() {
    epname.innerHTML = name43;
    epsymbol.innerHTML = symbol43;
    epac.innerHTML = atomconfig43;
    epcgb.innerHTML = cgb43;
    epan.innerHTML = atomnos43;
    epam.innerHTML = atommass43;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function ruthenium() {
    epname.innerHTML = name44
    epsymbol.innerHTML = symbol44;
    epac.innerHTML = atomconfig44;
    epcgb.innerHTML = cgb44;
    epan.innerHTML = atomnos44;
    epam.innerHTML = atommass44;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function rhodium() {
    epname.innerHTML = name45;
    epsymbol.innerHTML = symbol45;
    epac.innerHTML = atomconfig45;
    epcgb.innerHTML = cgb45;
    epan.innerHTML = atomnos45;
    epam.innerHTML = atommass45;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function palladium() {
    epname.innerHTML = name46
    epsymbol.innerHTML = symbol46;
    epac.innerHTML = atomconfig46;
    epcgb.innerHTML = cgb46;
    epan.innerHTML = atomnos46;
    epam.innerHTML = atommass46;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function silver() {
    epname.innerHTML = name47;
    epsymbol.innerHTML = symbol47;
    epac.innerHTML = atomconfig47;
    epcgb.innerHTML = cgb47;
    epan.innerHTML = atomnos47;
    epam.innerHTML = atommass47;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function cadmium() {
    epname.innerHTML = name48
    epsymbol.innerHTML = symbol48;
    epac.innerHTML = atomconfig48;
    epcgb.innerHTML = cgb48;
    epan.innerHTML = atomnos48;
    epam.innerHTML = atommass48;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function indium() {
    epname.innerHTML = name49;
    epsymbol.innerHTML = symbol49;
    epac.innerHTML = atomconfig49;
    epcgb.innerHTML = cgb49;
    epan.innerHTML = atomnos49;
    epam.innerHTML = atommass49;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function tin() {
    epname.innerHTML = name50
    epsymbol.innerHTML = symbol50;
    epac.innerHTML = atomconfig50;
    epcgb.innerHTML = cgb50;
    epan.innerHTML = atomnos50;
    epam.innerHTML = atommass50;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}

//51-60
function antimony() {
    epname.innerHTML = name51;
    epsymbol.innerHTML = symbol51;
    epac.innerHTML = atomconfig51;
    epcgb.innerHTML = cgb51;
    epan.innerHTML = atomnos51;
    epam.innerHTML = atommass51;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function tellurium() {
    epname.innerHTML = name52
    epsymbol.innerHTML = symbol52;
    epac.innerHTML = atomconfig52;
    epcgb.innerHTML = cgb52;
    epan.innerHTML = atomnos52;
    epam.innerHTML = atommass52;
    epcc.style.backgroundColor = cc_m;hideRi();
}
function iodine() {
    epname.innerHTML = name53;
    epsymbol.innerHTML = symbol53;
    epac.innerHTML = atomconfig53;
    epcgb.innerHTML = cgb53;
    epan.innerHTML = atomnos53;
    epam.innerHTML = atommass53;
    epcc.style.backgroundColor = cc_h;hideRi();
}
function xenon() {
    epname.innerHTML = name54
    epsymbol.innerHTML = symbol54;
    epac.innerHTML = atomconfig54;
    epcgb.innerHTML = cgb54;
    epan.innerHTML = atomnos54;
    epam.innerHTML = atommass54;
    epcc.style.backgroundColor = cc_ng;hideRi();
}
function cesium() {
    epname.innerHTML = name55;
    epsymbol.innerHTML = symbol55;
    epac.innerHTML = atomconfig55;
    epcgb.innerHTML = cgb55;
    epan.innerHTML = atomnos55;
    epam.innerHTML = atommass55;
    epcc.style.backgroundColor = cc_am;hideRi();
}
function barium() {
    epname.innerHTML = name56
    epsymbol.innerHTML = symbol56;
    epac.innerHTML = atomconfig56;
    epcgb.innerHTML = cgb56;
    epan.innerHTML = atomnos56;
    epam.innerHTML = atommass56;
    epcc.style.backgroundColor = cc_aem;hideRi();
}
function lanthanum() {
    epname.innerHTML = name57;
    epsymbol.innerHTML = symbol57;
    epac.innerHTML = atomconfig57;
    epcgb.innerHTML = cgb57;
    epan.innerHTML = atomnos57;
    epam.innerHTML = atommass57;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function cerium() {
    epname.innerHTML = name58
    epsymbol.innerHTML = symbol58;
    epac.innerHTML = atomconfig58;
    epcgb.innerHTML = cgb58;
    epan.innerHTML = atomnos58;
    epam.innerHTML = atommass58;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function praseodymium() {
    epname.innerHTML = name59;
    epsymbol.innerHTML = symbol59;
    epac.innerHTML = atomconfig59;
    epcgb.innerHTML = cgb59;
    epan.innerHTML = atomnos59;
    epam.innerHTML = atommass59;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function neodymium() {
    epname.innerHTML = name60
    epsymbol.innerHTML = symbol60;
    epac.innerHTML = atomconfig60;
    epcgb.innerHTML = cgb60;
    epan.innerHTML = atomnos60;
    epam.innerHTML = atommass60;
    epcc.style.backgroundColor = cc_l;hideRi();
}

//61-70
function promethium() {
    epname.innerHTML = name61;
    epsymbol.innerHTML = symbol61;
    epac.innerHTML = atomconfig61;
    epcgb.innerHTML = cgb61;
    epan.innerHTML = atomnos61;
    epam.innerHTML = atommass61;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function samarium() {
    epname.innerHTML = name62
    epsymbol.innerHTML = symbol62;
    epac.innerHTML = atomconfig62;
    epcgb.innerHTML = cgb62;
    epan.innerHTML = atomnos62;
    epam.innerHTML = atommass62;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function europium() {
    epname.innerHTML = name63;
    epsymbol.innerHTML = symbol63;
    epac.innerHTML = atomconfig63;
    epcgb.innerHTML = cgb63;
    epan.innerHTML = atomnos63;
    epam.innerHTML = atommass63;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function gadolinium() {
    epname.innerHTML = name64
    epsymbol.innerHTML = symbol64;
    epac.innerHTML = atomconfig64;
    epcgb.innerHTML = cgb64;
    epan.innerHTML = atomnos64;
    epam.innerHTML = atommass64;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function terbium() {
    epname.innerHTML = name65;
    epsymbol.innerHTML = symbol65;
    epac.innerHTML = atomconfig65;
    epcgb.innerHTML = cgb65;
    epan.innerHTML = atomnos65;
    epam.innerHTML = atommass65;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function dysprosium() {
    epname.innerHTML = name66
    epsymbol.innerHTML = symbol66;
    epac.innerHTML = atomconfig66;
    epcgb.innerHTML = cgb66;
    epan.innerHTML = atomnos66;
    epam.innerHTML = atommass66;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function holmium() {
    epname.innerHTML = name67;
    epsymbol.innerHTML = symbol67;
    epac.innerHTML = atomconfig67;
    epcgb.innerHTML = cgb67;
    epan.innerHTML = atomnos67;
    epam.innerHTML = atommass67;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function erbium() {
    epname.innerHTML = name68
    epsymbol.innerHTML = symbol68;
    epac.innerHTML = atomconfig68;
    epcgb.innerHTML = cgb68;
    epan.innerHTML = atomnos68;
    epam.innerHTML = atommass68;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function thulium() {
    epname.innerHTML = name69;
    epsymbol.innerHTML = symbol69;
    epac.innerHTML = atomconfig69;
    epcgb.innerHTML = cgb69;
    epan.innerHTML = atomnos69;
    epam.innerHTML = atommass69;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function ytterbium() {
    epname.innerHTML = name70
    epsymbol.innerHTML = symbol70;
    epac.innerHTML = atomconfig70;
    epcgb.innerHTML = cgb70;
    epan.innerHTML = atomnos70;
    epam.innerHTML = atommass70;
    epcc.style.backgroundColor = cc_l;hideRi();
}

//71-80
function lutetium() {
    epname.innerHTML = name71;
    epsymbol.innerHTML = symbol71;
    epac.innerHTML = atomconfig71;
    epcgb.innerHTML = cgb71;
    epan.innerHTML = atomnos71;
    epam.innerHTML = atommass71;
    epcc.style.backgroundColor = cc_l;hideRi();
}
function hafnium() {
    epname.innerHTML = name72
    epsymbol.innerHTML = symbol72;
    epac.innerHTML = atomconfig72;
    epcgb.innerHTML = cgb72;
    epan.innerHTML = atomnos72;
    epam.innerHTML = atommass72;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function tantalum() {
    epname.innerHTML = name73;
    epsymbol.innerHTML = symbol73;
    epac.innerHTML = atomconfig73;
    epcgb.innerHTML = cgb73;
    epan.innerHTML = atomnos73;
    epam.innerHTML = atommass73;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function tungsten() {
    epname.innerHTML = name74
    epsymbol.innerHTML = symbol74;
    epac.innerHTML = atomconfig74;
    epcgb.innerHTML = cgb74;
    epan.innerHTML = atomnos74;
    epam.innerHTML = atommass74;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function rhenium() {
    epname.innerHTML = name75;
    epsymbol.innerHTML = symbol75;
    epac.innerHTML = atomconfig75;
    epcgb.innerHTML = cgb75;
    epan.innerHTML = atomnos75;
    epam.innerHTML = atommass75;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function osmium() {
    epname.innerHTML = name76
    epsymbol.innerHTML = symbol76;
    epac.innerHTML = atomconfig76;
    epcgb.innerHTML = cgb76;
    epan.innerHTML = atomnos76;
    epam.innerHTML = atommass76;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function iridium() {
    epname.innerHTML = name77;
    epsymbol.innerHTML = symbol77;
    epac.innerHTML = atomconfig77;
    epcgb.innerHTML = cgb77;
    epan.innerHTML = atomnos77;
    epam.innerHTML = atommass77;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function platinum() {
    epname.innerHTML = name78
    epsymbol.innerHTML = symbol78;
    epac.innerHTML = atomconfig78;
    epcgb.innerHTML = cgb78;
    epan.innerHTML = atomnos78;
    epam.innerHTML = atommass78;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function gold() {
    epname.innerHTML = name79;
    epsymbol.innerHTML = symbol79;
    epac.innerHTML = atomconfig79;
    epcgb.innerHTML = cgb79;
    epan.innerHTML = atomnos79;
    epam.innerHTML = atommass79;
    epcc.style.backgroundColor = cc_tm;hideRi();
}
function mercury() {
    epname.innerHTML = name80
    epsymbol.innerHTML = symbol80;
    epac.innerHTML = atomconfig80;
    epcgb.innerHTML = cgb80;
    epan.innerHTML = atomnos80;
    epam.innerHTML = atommass80;
    epcc.style.backgroundColor = cc_tm;hideRi();
}

//81-90
function thallium() {
    epname.innerHTML = name81;
    epsymbol.innerHTML = symbol81;
    epac.innerHTML = atomconfig81;
    epcgb.innerHTML = cgb81;
    epan.innerHTML = atomnos81;
    epam.innerHTML = atommass81;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function lead() {
    epname.innerHTML = name82
    epsymbol.innerHTML = symbol82;
    epac.innerHTML = atomconfig82;
    epcgb.innerHTML = cgb82;
    epan.innerHTML = atomnos82;
    epam.innerHTML = atommass82;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function bismuth() {
    epname.innerHTML = name83;
    epsymbol.innerHTML = symbol83;
    epac.innerHTML = atomconfig83;
    epcgb.innerHTML = cgb83;
    epan.innerHTML = atomnos83;
    epam.innerHTML = atommass83;
    epcc.style.backgroundColor = cc_ptm;hideRi();
}
function polonium() {
    epname.innerHTML = name84
    epsymbol.innerHTML = symbol84;
    epac.innerHTML = atomconfig84;
    epcgb.innerHTML = cgb84;
    epan.innerHTML = atomnos84;
    epam.innerHTML = atommass84;
    epcc.style.backgroundColor = cc_m;showRi();
}
function astatine() {
    epname.innerHTML = name85;
    epsymbol.innerHTML = symbol85;
    epac.innerHTML = atomconfig85;
    epcgb.innerHTML = cgb85;
    epan.innerHTML = atomnos85;
    epam.innerHTML = atommass85;
    epcc.style.backgroundColor = cc_h;showRi();
}
function radon() {
    epname.innerHTML = name86
    epsymbol.innerHTML = symbol86;
    epac.innerHTML = atomconfig86;
    epcgb.innerHTML = cgb86;
    epan.innerHTML = atomnos86;
    epam.innerHTML = atommass86;
    epcc.style.backgroundColor = cc_ng;showRi();
}
function francium() {
    epname.innerHTML = name87;
    epsymbol.innerHTML = symbol87;
    epac.innerHTML = atomconfig87;
    epcgb.innerHTML = cgb87;
    epan.innerHTML = atomnos87;
    epam.innerHTML = atommass87;
    epcc.style.backgroundColor = cc_am;showRi();
}
function radium() {
    epname.innerHTML = name88
    epsymbol.innerHTML = symbol88;
    epac.innerHTML = atomconfig88;
    epcgb.innerHTML = cgb88;
    epan.innerHTML = atomnos88;
    epam.innerHTML = atommass88;
    epcc.style.backgroundColor = cc_aem;showRi();
}
function actinium() {
    epname.innerHTML = name89;
    epsymbol.innerHTML = symbol89;
    epac.innerHTML = atomconfig89;
    epcgb.innerHTML = cgb89;
    epan.innerHTML = atomnos89;
    epam.innerHTML = atommass89;
    epcc.style.backgroundColor = cc_a;showRi();
}
function thorium() {
    epname.innerHTML = name90
    epsymbol.innerHTML = symbol90;
    epac.innerHTML = atomconfig90;
    epcgb.innerHTML = cgb90;
    epan.innerHTML = atomnos90;
    epam.innerHTML = atommass90;
    epcc.style.backgroundColor = cc_a;showRi();
}

//91-100
function protactinium() {
    epname.innerHTML = name91;
    epsymbol.innerHTML = symbol91;
    epac.innerHTML = atomconfig91;
    epcgb.innerHTML = cgb91;
    epan.innerHTML = atomnos91;
    epam.innerHTML = atommass91;
    epcc.style.backgroundColor = cc_a;showRi();
}
function uranium() {
    epname.innerHTML = name92
    epsymbol.innerHTML = symbol92;
    epac.innerHTML = atomconfig92;
    epcgb.innerHTML = cgb92;
    epan.innerHTML = atomnos92;
    epam.innerHTML = atommass92;
    epcc.style.backgroundColor = cc_a;showRi();
}
function neptunium() {
    epname.innerHTML = name93;
    epsymbol.innerHTML = symbol93;
    epac.innerHTML = atomconfig93;
    epcgb.innerHTML = cgb93;
    epan.innerHTML = atomnos93;
    epam.innerHTML = atommass93;
    epcc.style.backgroundColor = cc_a;showRi();
}
function plutonium() {
    epname.innerHTML = name94
    epsymbol.innerHTML = symbol94;
    epac.innerHTML = atomconfig94;
    epcgb.innerHTML = cgb94;
    epan.innerHTML = atomnos94;
    epam.innerHTML = atommass94;
    epcc.style.backgroundColor = cc_a;showRi();
}
function americium() {
    epname.innerHTML = name95;
    epsymbol.innerHTML = symbol95;
    epac.innerHTML = atomconfig95;
    epcgb.innerHTML = cgb95;
    epan.innerHTML = atomnos95;
    epam.innerHTML = atommass95;
    epcc.style.backgroundColor = cc_a;showRi();
}
function curium() {
    epname.innerHTML = name96
    epsymbol.innerHTML = symbol96;
    epac.innerHTML = atomconfig96;
    epcgb.innerHTML = cgb96;
    epan.innerHTML = atomnos96;
    epam.innerHTML = atommass96;
    epcc.style.backgroundColor = cc_a;showRi();
}
function berkelium() {
    epname.innerHTML = name97;
    epsymbol.innerHTML = symbol97;
    epac.innerHTML = atomconfig97;
    epcgb.innerHTML = cgb97;
    epan.innerHTML = atomnos97;
    epam.innerHTML = atommass97;
    epcc.style.backgroundColor = cc_a;showRi();
}
function californium() {
    epname.innerHTML = name98
    epsymbol.innerHTML = symbol98;
    epac.innerHTML = atomconfig98;
    epcgb.innerHTML = cgb98;
    epan.innerHTML = atomnos98;
    epam.innerHTML = atommass98;
    epcc.style.backgroundColor = cc_a;showRi();
}
function einsteinium() {
    epname.innerHTML = name99;
    epsymbol.innerHTML = symbol99;
    epac.innerHTML = atomconfig99;
    epcgb.innerHTML = cgb99;
    epan.innerHTML = atomnos99;
    epam.innerHTML = atommass99;
    epcc.style.backgroundColor = cc_a;showRi();
}
function fermium() {
    epname.innerHTML = name100
    epsymbol.innerHTML = symbol100;
    epac.innerHTML = atomconfig100;
    epcgb.innerHTML = cgb100;
    epan.innerHTML = atomnos100;
    epam.innerHTML = atommass100;
    epcc.style.backgroundColor = cc_a;showRi();
}

//101-110
function mendelevium() {
    epname.innerHTML = name101;
    epsymbol.innerHTML = symbol101;
    epac.innerHTML = atomconfig101;
    epcgb.innerHTML = cgb101;
    epan.innerHTML = atomnos101;
    epam.innerHTML = atommass101;
    epcc.style.backgroundColor = cc_a;showRi();
}
function nobelium() {
    epname.innerHTML = name102
    epsymbol.innerHTML = symbol102;
    epac.innerHTML = atomconfig102;
    epcgb.innerHTML = cgb102;
    epan.innerHTML = atomnos102;
    epam.innerHTML = atommass102;
    epcc.style.backgroundColor = cc_a;showRi();
}
function lawrencium() {
    epname.innerHTML = name103;
    epsymbol.innerHTML = symbol103;
    epac.innerHTML = atomconfig103;
    epcgb.innerHTML = cgb103;
    epan.innerHTML = atomnos103;
    epam.innerHTML = atommass103;
    epcc.style.backgroundColor = cc_a;showRi();
}
function rutherfordium() {
    epname.innerHTML = name104
    epsymbol.innerHTML = symbol104;
    epac.innerHTML = atomconfig104;
    epcgb.innerHTML = cgb104;
    epan.innerHTML = atomnos104;
    epam.innerHTML = atommass104;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function dubnium() {
    epname.innerHTML = name105;
    epsymbol.innerHTML = symbol105;
    epac.innerHTML = atomconfig105;
    epcgb.innerHTML = cgb105;
    epan.innerHTML = atomnos105;
    epam.innerHTML = atommass105;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function seaborgium() {
    epname.innerHTML = name106
    epsymbol.innerHTML = symbol106;
    epac.innerHTML = atomconfig106;
    epcgb.innerHTML = cgb106;
    epan.innerHTML = atomnos106;
    epam.innerHTML = atommass106;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function bohrium() {
    epname.innerHTML = name107;
    epsymbol.innerHTML = symbol107;
    epac.innerHTML = atomconfig107;
    epcgb.innerHTML = cgb107;
    epan.innerHTML = atomnos107;
    epam.innerHTML = atommass107;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function hassium() {
    epname.innerHTML = name108
    epsymbol.innerHTML = symbol108;
    epac.innerHTML = atomconfig108;
    epcgb.innerHTML = cgb108;
    epan.innerHTML = atomnos108;
    epam.innerHTML = atommass108;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function meitnerium() {
    epname.innerHTML = name109;
    epsymbol.innerHTML = symbol109;
    epac.innerHTML = atomconfig109;
    epcgb.innerHTML = cgb109;
    epan.innerHTML = atomnos109;
    epam.innerHTML = atommass109;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function darmstadtium() {
    epname.innerHTML = name110
    epsymbol.innerHTML = symbol110;
    epac.innerHTML = atomconfig110;
    epcgb.innerHTML = cgb110;
    epan.innerHTML = atomnos110;
    epam.innerHTML = atommass110;
    epcc.style.backgroundColor = cc_tm;showRi();
}

//111-118
function roentgenium() {
    epname.innerHTML = name111;
    epsymbol.innerHTML = symbol111;
    epac.innerHTML = atomconfig111;
    epcgb.innerHTML = cgb111;
    epan.innerHTML = atomnos111;
    epam.innerHTML = atommass111;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function copernicium() {
    epname.innerHTML = name112
    epsymbol.innerHTML = symbol112;
    epac.innerHTML = atomconfig112;
    epcgb.innerHTML = cgb112;
    epan.innerHTML = atomnos112;
    epam.innerHTML = atommass112;
    epcc.style.backgroundColor = cc_tm;showRi();
}
function nihonium() {
    epname.innerHTML = name113;
    epsymbol.innerHTML = symbol113;
    epac.innerHTML = atomconfig113;
    epcgb.innerHTML = cgb113;
    epan.innerHTML = atomnos113;
    epam.innerHTML = atommass113;
    epcc.style.backgroundColor = cc_ptm;showRi();
}
function flerovium() {
    epname.innerHTML = name114
    epsymbol.innerHTML = symbol114;
    epac.innerHTML = atomconfig114;
    epcgb.innerHTML = cgb114;
    epan.innerHTML = atomnos114;
    epam.innerHTML = atommass114;
    epcc.style.backgroundColor = cc_ptm;showRi();
}
function moscovium() {
    epname.innerHTML = name115;
    epsymbol.innerHTML = symbol115;
    epac.innerHTML = atomconfig115;
    epcgb.innerHTML = cgb115;
    epan.innerHTML = atomnos115;
    epam.innerHTML = atommass115;
    epcc.style.backgroundColor = cc_ptm;showRi();
}
function livermorium() {
    epname.innerHTML = name116
    epsymbol.innerHTML = symbol116;
    epac.innerHTML = atomconfig116;
    epcgb.innerHTML = cgb116;
    epan.innerHTML = atomnos116;
    epam.innerHTML = atommass116;
    epcc.style.backgroundColor = cc_ptm;showRi();
}
function tennessine() {
    epname.innerHTML = name117;
    epsymbol.innerHTML = symbol117;
    epac.innerHTML = atomconfig117;
    epcgb.innerHTML = cgb117;
    epan.innerHTML = atomnos117;
    epam.innerHTML = atommass117;
    epcc.style.backgroundColor = cc_h;showRi();
}
function oganesson() {
    epname.innerHTML = name118
    epsymbol.innerHTML = symbol118;
    epac.innerHTML = atomconfig118;
    epcgb.innerHTML = cgb118;
    epan.innerHTML = atomnos118;
    epam.innerHTML = atommass118;
    epcc.style.backgroundColor = cc_ng;showRi();
    prev.disabled = false;
}
//End



//Event Listener for close-predata element
cdp.addEventListener("click", closeDatapreview);
cdp.addEventListener("click", triggerRfilter);
//Event Listener for Next and Prev
next.addEventListener("click", nextEpan);
prev.addEventListener("click", prevEpan);
next.addEventListener("click", triggerRfilter);
prev.addEventListener("click", triggerRfilter);
//Error Counter
var error_count = 0;
let error_counter = document.getElementById("error-count");
let error_div = document.getElementById("error-div");

function addError() {
    error_count = error_count + 1;
    error_counter.innerHTML = error_count;
    error_div.style.display = "block";
}




//Event Listener on "Esc" to close the Data Preview
window.onkeyup = function (event) {
    if(event.keyCode == 27) {
        closeDatapreview();
        hideSei();
        hideRi();
        closeError();
        cupdateLog();
    }
}
//Event Listener on lcl
let lcl = document.getElementById("lcl");
lcl.addEventListener("click", errorMATOE005);
lcl.addEventListener("click", addError);

//openDataPreview(): Shows element-preview-opac and its children elements
function openDataPreview() {
    epo.style.display= "block";
    ep.style.display ="block";
    setTimeout(function() {ep.style.width = "40%"; ep.style.right = "0"; epo.style.opacity = "1";}, 100);
    triggerRfilter();
    setTimeout(checkOdpvalue, 500);
}
//closeDataPreview(): Hides element-preview-opac and its children elements
function closeDatapreview() {
    ep.style.width = "0%";
    ep.style.right = "-10%";
    setTimeout(function() {ep.style.display="none";epo.style.opacity = "0"; setTimeout(function() {epo.style.display = "none"},100);}, 500);
}

//Beta Testing
//let next = document.getElementById("next");
//let prev = document.getElementById("prev");
let trigger = document.getElementById("trigger");
let sei = document.getElementById("sei-div");
let ec = document.getElementById("error-close");
let ah = document.getElementById("athena-head");
let rab = document.getElementById("rab");

trigger.addEventListener("click", search);
ec.addEventListener("click", closeError);
rab.addEventListener("click", errorMATOE003);
rab.addEventListener("click", addError);


function closeError() {
    document.getElementById("error-div").style.display = "none";
}
function search() {
    sei.style.display = "block";
    blackOpac.style.display = "block";
}

//showathenainfo
let aid = document.getElementById("credit-modal");
let caid = document.getElementById("close-infos");
let oaid = document.getElementById("athena-head");
let lul = document.getElementById("lul");
let luldiv = document.getElementById("luldiv");
let clul = document.getElementById("clul");

lul.addEventListener("click", updateLog);
oaid.addEventListener("click", openaid);
caid.addEventListener("click", closeaid);
lul.addEventListener("click", updateLog);
clul.addEventListener("click", cupdateLog);

function openaid() {
    aid.style.display = "grid";
    blackOpac.style.display = "block";
}
function closeaid() {
    aid.style.display = "none";
    blackOpac.style.display = "none";
}
function updateLog() {
    luldiv.style.display = "block";
    blackOpac.style.display = "block";
}
function cupdateLog() {
    luldiv.style.display = "none";
    blackOpac.style.display = "none";
}

//Error Replies
//Element Vars
let errorid = document.getElementById("eid");
let errormsg = document.getElementById("error-msg")
//Reply
function errorMATOE001() {
    //Description: Error for invalid search or no search result. 
    //Error Code: MATOE_001
    errorid.innerHTML = "(MATOE_001): Invalid Search";
    errormsg.innerHTML = "The item you're searching for can't be found. Maybe you entered a wrong/invalid value."
    error_div.style.backgroundColor = "#DB4437";
}
function errorMATOE002() {
    //Description: Error for no data available.
    //Error Code: MATOE_002
    errorid.innerHTML = "(MATOE_002): No Data";
    errormsg.innerHTML = "The system didn't return any data. Maybe the data isn't available or valid.";
    error_div.style.backgroundColor = "#DB4437";
}
function errorMATOE003() {
    //Description: Error for no internet connection.
    //Error Code: MATOE_003
    errorid.innerHTML = "(MATOE_003): Offline";
    errormsg.innerHTML = "No Internet Connection. Please check if you're connected with any networks.";
    error_div.style.backgroundColor = "#DB4437";
}
function errorMATOE004() {
    //Description: Error on application's resources, scripts, or codes.
    //Error Code: MATOE_004
    errorid.innerHTML = "(MATOE_004): Internal Error";
    errormsg.innerHTML = "Internal system error. Your browser's devtools can give more information about this error."
}
function errorMATOE005() {
    //Description: Error for unpatched updates.
    //Error Code: MATOE_005
    errorid.innerHTML = "(MATOE_005): Soon!";
    errormsg.innerHTML = "Update unavailable for now, but will be available soon!";
}
function errorMATOE051() {
    //Description: Warning for invalid moves
    //Error Code: MATOE_051
    errorid.innerHTML = "(MATOE_051): Invalid Move";
    errormsg.innerHTML  = "You're creating an invalid move, such as pressing next even if it's the last."
    error_div.style.backgroundColor = "goldenrod";
}

//Time
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;

    setTimeout(showTime, 1000);

}
function showDate() {
    var date2 = new Date();
    var month = date2.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date2.getDate();
    var year = date2.getFullYear();
    var monthshow = months[month];
    var dateshow = monthshow + "/" + day + "/" + year;
    document.getElementById("date").innerText = dateshow;
}
showTime();
showDate();

//Search System
let sfv = document.getElementById("sei-input");
let sf = document.getElementById("search-element-id");
//sf.addEventListener("submit", searchEid);


function searchEid(form) {
  switch (form.sei_input.value) {
    case "1":
        hydrogen();hideSei();openDataPreview();
        break;
    case "2":
        helium();hideSei();openDataPreview();
        break;
    case "3":
        lithium();hideSei();openDataPreview();
        break;
    case "4":
        berrylium();hideSei();openDataPreview();
        break;
    case "5":
        boron();hideSei();openDataPreview();
        break;
    case "6":
        carbon();hideSei();openDataPreview();
        break;
    case "7":
        nitrogen();hideSei();openDataPreview();
        break;
    case "8":
        oxygen();hideSei();openDataPreview();
        break;
    case "9":
        fluorine();hideSei();openDataPreview();//flourine
        break;
    case "10":
        neon();hideSei();openDataPreview();
        break;
    case "11":
        sodium();hideSei();openDataPreview();
        break;
    case "12":
        magnesium();hideSei();openDataPreview();
        break;
    case "13":
        aluminum();hideSei();openDataPreview();
        break;
    case "14":
        silicon();hideSei();openDataPreview();
        break;
    case "15":
        phosphorus();hideSei();openDataPreview();
        break;
    case "16":
        sulfur();hideSei();openDataPreview();
        break;
    case "17":
        chlorine();hideSei();openDataPreview();
        break;
    case "18":
        argon();hideSei();openDataPreview();
        break;
    case "19":
        potassium();hideSei();openDataPreview();
        break;
    case "20":
        calcium();hideSei();openDataPreview();
        break;
    case "21":
        scandium();hideSei();openDataPreview();
        break;
    case "22":
        titanium();hideSei();openDataPreview();
        break;
    case "23":
        vanadium();hideSei();openDataPreview();
        break;
    case "24":
        chromium();hideSei();openDataPreview();
        break;
    case "25":
        manganese();hideSei();openDataPreview();
        break;
    case "26":
        iron();hideSei();openDataPreview();
        break;
    case "27":
        cobalt();hideSei();openDataPreview();
        break;
    case "28":
        nickel();hideSei();openDataPreview();
        break;
    case "29":
        copper();hideSei();openDataPreview();
        break;
    case "30":
        zinc();hideSei();openDataPreview();
        break;
    case "31":
        gallium();hideSei();openDataPreview();
        break;
    case "32":
        germanium();hideSei();openDataPreview();
        break;
    case "33":
        arsenic();hideSei();openDataPreview();//arsenic
        break;
    case "34":
        selenium();hideSei();openDataPreview();
        break;
    case "35":
        bromine();hideSei();openDataPreview();
        break;
    case "36":
        krypton();hideSei();openDataPreview();
        break;
    case "37":
        rubidium();hideSei();openDataPreview();
        break;
    case "38":
        strontium();hideSei();openDataPreview();
        break;
    case "39":
        yttrium();hideSei();openDataPreview();
        break;
    case "40":
        zirconium();hideSei();openDataPreview();
        break;
    case "41":
        niobium();hideSei();openDataPreview();
        break;
    case "42":
        molybdenum();hideSei();openDataPreview();
        break;
    case "43":
        technetium();hideSei();openDataPreview();
        break;
    case "44":
        ruthenium();hideSei();openDataPreview();
        break;
    case "45":
        rhodium();hideSei();openDataPreview();
        break;
    case "46":
        palladium();hideSei();openDataPreview();
        break;
    case "47":
        silver();hideSei();openDataPreview();
        break;
    case "48":
        cadmium();hideSei();openDataPreview();
        break;
    case "49":
        indium();hideSei();openDataPreview();
        break;
    case "50":
        tin();hideSei();openDataPreview();
        break;
    case "51":
        antimony();hideSei();openDataPreview();
        break;
    case "52":
        tellurium();hideSei();openDataPreview();
        break;
    case "53":
        iodine();hideSei();openDataPreview();
        break;
    case "54":
        xenon();hideSei();openDataPreview();
        break;
    case "55":
        cesium();hideSei();openDataPreview();
        break;
    case "56":
        barium();hideSei();openDataPreview();
        break;
    case "57":
        lanthanum();hideSei();openDataPreview();
        break;
    case "58":
        cerium();hideSei();openDataPreview();
        break;
    case "59":
        praseodymium();hideSei();openDataPreview();
        break;
    case "60":
        neodymium();hideSei();openDataPreview();
        break;
    case "61":
        promethium();hideSei();openDataPreview();
        break;
    case "62":
        samarium();hideSei();openDataPreview();
        break;
    case "63":
        europium();hideSei();openDataPreview();
        break;
    case "64":
        gadolinium();hideSei();openDataPreview();
        break;
    case "65":
        terbium();hideSei();openDataPreview();
        break;
    case "66":
        dysprosium();hideSei();openDataPreview();
        break;
    case "67":
        holmium();hideSei();openDataPreview();
        break;
    case "68":
        erbium();hideSei();openDataPreview();
        break;
    case "69":
        thulium();hideSei();openDataPreview();
        break;
    case "70":
        ytterbium();hideSei();openDataPreview();
        break;
    case "71":
        lutetium();hideSei();openDataPreview();
        break;
    case "72":
        hafnium();hideSei();openDataPreview();
        break;
    case "73":
        tantalum();hideSei();openDataPreview();
        break;
    case "74":
        tungsten();hideSei();openDataPreview();
        break;
    case "75":
        rhenium();hideSei();openDataPreview();
        break;
    case "76":
        osmium();hideSei();openDataPreview();
        break;
    case "77":
        iridium();hideSei();openDataPreview();
        break;
    case "78":
        platinum();hideSei();openDataPreview();
        break;
    case "79":
        gold();hideSei();openDataPreview();
        break;
    case "80":
        mercury();hideSei();openDataPreview();
        break;
    case "81":
        thallium();hideSei();openDataPreview();
        break;
    case "82":
        lead();hideSei();openDataPreview();
        break;
    case "83":
        bismuth();hideSei();openDataPreview();
        break;
    case "84":
        polonium();hideSei();openDataPreview();
        break;
    case "85":
        astatine();hideSei();openDataPreview();
        break;
    case "86":
        radon();hideSei();openDataPreview();
        break;
    case "87":
        francium();hideSei();openDataPreview();
        break;
    case "88":
        radium();hideSei();openDataPreview();
        break;
    case "89":
        actinium();hideSei();hideSei();openDataPreview();
        break;
    case "90":
        thorium();hideSei();openDataPreview();
        break;
    case "91":
        protactinium();hideSei();openDataPreview();
        break;
    case "92":
        uranium();hideSei();openDataPreview();
        break;
    case "93":
        neptunium();hideSei();openDataPreview();
        break;
    case "94":
        plutonium();hideSei();openDataPreview();
        break;
    case "95":
        americium();hideSei();openDataPreview();
        break;
    case "96":
        curium();hideSei();openDataPreview();
        break;
    case "97":
        berkelium();hideSei();openDataPreview();
        break;
    case "98":
        californium();hideSei();openDataPreview();
        break;
    case "99":
        einsteinium();hideSei();openDataPreview();
        break;
    case "100":
        fermium();hideSei();openDataPreview();
        break;
    case "101":
        mendelevium();hideSei();openDataPreview();
        break;
    case "102":
        nobelium();hideSei();openDataPreview();
        break;
    case "103":
        lawrencium();hideSei();openDataPreview();
        break;
    case "104":
        rutherfordium();hideSei();openDataPreview();
        break;
    case "105":
        dubnium();hideSei();openDataPreview();
        break;
    case "106":
        seaborgium();hideSei();openDataPreview();
        break;
    case "107":
        bohrium();hideSei();openDataPreview();
        break;
    case "108":
        hassium();hideSei();openDataPreview();
        break;
    case "109":
        meitnerium();hideSei();openDataPreview();
        break;
    case "110":
        darmstadtium();hideSei();openDataPreview();
        break;
    case "111":
        roentgenium();hideSei();openDataPreview();
        break;
    case "112":
        copernicium();hideSei();openDataPreview();
        break;
    case "113":
        nihonium();hideSei();openDataPreview();
        break;
    case "114":
        flerovium();hideSei();openDataPreview();
        break;
    case "115":
        moscovium();hideSei();openDataPreview();
        break;
    case "116":
        livermorium();hideSei();openDataPreview();
        break;
    case "117":
        tennessine();hideSei();openDataPreview();
        break;
    case "118":
        oganesson();hideSei();openDataPreview();
        break;
    case "":
        alert("Silly! Add something on the search box to find what you're lookin' for.");
    default:
        addError();
        errorMATOE001();
      }
}

function hideSei() {
    document.getElementById("sei-div").style.display = "none";
    blackOpac.style.display = "none";
}
//odp
let odp = document.getElementById("odp");
odp.addEventListener("click", openDataPreview);

//Check ODP
function checkOdpvalue() {
    //Checks Open Data Preview Value if there's a valid value
    if(epan.innerText == "#") {
        addError();
        errorMATOE002();
    }
}

let expand = document.getElementById("expand");

expand.addEventListener("click", errorMATOE005);
expand.addEventListener("click", addError);

//Periodic-element-groups view
//Variables
let AlkaliMetals = document.querySelectorAll(".alkali-metals");
let AlkalineEarthMetals = document.querySelectorAll(".alkaline-earth-metals");
let TransitionMetals = document.querySelectorAll(".transition-metals");
let PostTransitionMetals = document.querySelectorAll(".post-transition-metal");
let NonMetal = document.querySelectorAll(".non-metal");
let Halogen = document.querySelectorAll(".halogen");
let NobleGas = document.querySelectorAll(".noble-gas");
let Metalloid = document.querySelectorAll(".metalloid");
let Lanthanide = document.querySelectorAll(".lanthanide");
let Actinide = document.querySelectorAll(".actinide");

//Highlight Reset
function hReset() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "1";
    }
}

//Highlight Alkali Metals
function hAlkaliMetals() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Alkaline Earth Metals
function hAlkalineEarthMetals() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Transition Metals
function hTransitionMetals() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Post Transition Metals
function hPostTransitionMetals() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Non Metals
function hNonMetal() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Halogens
function hHalogens() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Noble Gas
function hNobleGas() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Metalloid
function hMetalloid() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Lanthanide
function hLanthanide() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "0.1";
    }
}

//Highlight Actinide
function hActinide() {
    for (i = 0; i < AlkaliMetals.length; i++) {
        AlkaliMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < AlkalineEarthMetals.length; i++) {
        AlkalineEarthMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < TransitionMetals.length; i++) {
        TransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < PostTransitionMetals.length; i++) {
        PostTransitionMetals[i].style.opacity = "0.1";
    }
    for (i = 0; i < NonMetal.length; i++) {
        NonMetal[i].style.opacity = "0.1";
    }
    for (i = 0; i < Halogen.length; i++) {
        Halogen[i].style.opacity = "0.1";
    }
    for (i = 0; i < NobleGas.length; i++) {
        NobleGas[i].style.opacity = "0.1";
    }
    for (i = 0; i < Metalloid.length; i++) {
        Metalloid[i].style.opacity = "0.1";
    }
    for (i = 0; i < Lanthanide.length; i++) {
        Lanthanide[i].style.opacity = "0.1";
    }
    for (i = 0; i < Actinide.length; i++) {
        Actinide[i].style.opacity = "1";
    }
}

//show gas type menu
function showGTMenu() {
    document.getElementById("sgtm").style.display = "block";
    document.getElementById("show-gas-type-menu").style.display = "none";
    document.getElementById("hide-gas-type-menu").style.display = "inline-block";
    setTimeout(function () {
        document.getElementById("sgtm").style.opacity = "1";
    }, 100);
}
function hideGTMenu() {
    document.getElementById("sgtm").style.opacity = "0";
    document.getElementById("show-gas-type-menu").style.display = "inline-block";
    document.getElementById("hide-gas-type-menu").style.display = "none";
    setTimeout(function () {
        document.getElementById("sgtm").style.display = "none";
    }, 500)
}

//Console
//Make the DIV element draggagle:
dragElement(document.getElementById("console"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "bar")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "bar").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Performance Upgrade: Next-Prev System
var elementIndex = 0;
showElement(elementIndex);

function nextElement(n) {
  showElement(elementIndex += n);
}

function prevElement(n) {
  showElement(elementIndex -= n);
}

function showElement(n) {
  var i;
  var x = elementDatas;
  var y = x.length-1;
    if (elementIndex > y) {
        elementIndex = 0;
        console.log(x[elementIndex].name);
        document.getElementById("test1").innerHTML = x[elementIndex].name;
        document.getElementById("test2").innerHTML = x[elementIndex].symbol;
        document.getElementById("test3").innerHTML = x[elementIndex].atomconfig;
        document.getElementById("test4").innerHTML = x[elementIndex].cgb;
        document.getElementById("test5").innerHTML = x[elementIndex].atomnos;
        document.getElementById("test6").innerHTML = x[elementIndex].atommass;
    }
    else if (elementIndex <= -1) {
        elementIndex = y;
        console.log(x[elementIndex].name);
        document.getElementById("test1").innerHTML = x[elementIndex].name;
        document.getElementById("test2").innerHTML = x[elementIndex].symbol;
        document.getElementById("test3").innerHTML = x[elementIndex].atomconfig;
        document.getElementById("test4").innerHTML = x[elementIndex].cgb;
        document.getElementById("test5").innerHTML = x[elementIndex].atomnos;
        document.getElementById("test6").innerHTML = x[elementIndex].atommass;
    }
    else {
        console.log(x[elementIndex].name);
        document.getElementById("test1").innerHTML = x[elementIndex].name;
        document.getElementById("test2").innerHTML = x[elementIndex].symbol;
        document.getElementById("test3").innerHTML = x[elementIndex].atomconfig;
        document.getElementById("test4").innerHTML = x[elementIndex].cgb;
        document.getElementById("test5").innerHTML = x[elementIndex].atomnos;
        document.getElementById("test6").innerHTML = x[elementIndex].atommass;
    }

  /*
  for (i = 0; i < x.length; i++) {
    console.log(x[i].name); 
  }
  */
}



//QoLF Updates

//Hide element preview once clicked outside the container
//window.addEventListener('click', function(e){   
//    if (ep.contains(e.target)){
//      return null;
//    } else{
//      closeDatapreview();
//    }
//  });
