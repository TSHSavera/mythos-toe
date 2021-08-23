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
var cdp = document.getElementById("close-predata");
//Container Opac: EPO
var epo = document.getElementById("element-preview-opac");
//Container Main:
var ep = document.getElementById("element-preview");
//Next button
var next = document.getElementById("next");
//Prev button
var prev = document.getElementById("prev");
//Black Opacity BG Overlay
var blackOpac = document.getElementById("black-opac");

//Element Previewer Variable Handlers
//Name
var epname = document.getElementById("ep-name");
//Symbol
var epsymbol = document.getElementById("ep-symbol");
//Atom Configuration
var epac = document.getElementById("atom-config");
//Chemical Group Block
var epcgb = document.getElementById("cgb");
//Atomic Number
var epan = document.getElementById("atomic-number");
//Atomic Mass
var epam = document.getElementById("atomic-mass");
//Color Coding
var epcc = document.getElementById("ep-symbol-div");

//Radioactive Filter
var ri = document.getElementById("radioactive");
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
            next.disabled = false;
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
            prev.disabled = false;
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
        case "#":
            addError();
            errorMATOE002();
    }
}

//Colors
var cc_nm = "#F4B400";
var cc_am = "#DB3E23";
var cc_aem = "#4285F4";
var cc_tm = "#537EC5";
var cc_ptm = "#0F9D58";
var cc_m = "rgb(100,202,5)";
var cc_ng = "#E2644E";
var cc_h = "#972714";
var cc_l = "#CBAF71";
var cc_a = "#FAB647";

//Element Datas
//1-10
//Hydrogen
var name1 = "Hydrogen";
var symbol1 ="H";
var atomconfig1 = "1s<sup>1</sup>";
var cgb1 = "Non-Metal";
var atomnos1 = "1";
var atommass1 = "1.008 units";
//Helium
var name2 = "Helium";
var symbol2 = "He";
var atomconfig2 = "1s<sup>2</sup>";
var cgb2 = "Noble Gas";
var atomnos2 = "2";
var atommass2 = "4.003 units";
//Lithium
var name3 = "Lithium";
var symbol3 = "Li";
var atomconfig3 = "[He]2s<sup>1</sup>";
var cgb3 = "Alkali Metals";
var atomnos3 = "3";
var atommass3 = "6.94 units";
//Berrylium
var name4 = "Berrylium";
var symbol4 = "Be";
var atomconfig4 = "[He]2s<sup>2</sup>";
var cgb4 = "Alkaline Earth Metals";
var atomnos4 = "4";
var atommass4 = "9.012 units";
//Boron
var name5 = "Boron";
var symbol5 = "B";
var atomconfig5 = "[He]2s<sup>2</sup>2p<sup>1</sup>";
var cgb5 = "Metalloid";
var atomnos5 = "5";
var atommass5 = "10.81 units";
//Carbon
var name6 = "Carbon";
var symbol6 = "C";
var atomconfig6 = "[He]2s<sup>2</sup>2p<sup>2</sup>";
var cgb6 = "Non-Metal";
var atomnos6 = "6";
var atommass6 = "12.011	units";
//Nitrogen
var name7 = "Nitrogen";
var symbol7 = "N";
var atomconfig7 = "[He]2s<sup>2</sup>2p<sup>3</sup>";
var cgb7 = "Non-Metal";
var atomnos7 = "7";
var atommass7 = "14.007	units";
//Oxygen
var name8 = "Oxygen";
var symbol8 = "O";
var atomconfig8 = "[He]2s<sup>2</sup>2p<sup>4</sup>";
var cgb8 = "Non-Metal";
var atomnos8 = "8";
var atommass8 = "15.999	units";
//Fluorine
var name9 = "Fluorine";
var symbol9 = "F";
var atomconfig9 = "[He]2s<sup>2</sup>2p<sup>5</sup>";
var cgb9 = "Halogen";
var atomnos9 = "9";
var atommass9 = "18.998	units";
//Neon
var name10 = "Neon";
var symbol10 = "Ne";
var atomconfig10 = "[He]2s<sup>2</sup>2p<sup>6</sup>";
var cgb10 = "Noble Gas";
var atomnos10 = "10";
var atommass10 = "20.180 units";
//11-20
//Sodium
var name11 = "Sodium";
var symbol11 ="Na";
var atomconfig11 = "[Ne]3s<sup>1</sup>";
var cgb11 = "Alkali Metals";
var atomnos11 = "11";
var atommass11 = "22.990 units";
//Magnesium
var name12 = "Magnesium";
var symbol12 = "Mg";
var atomconfig12 = "[Ne]3s<sup>2</sup>";
var cgb12 = "Noble Gas";
var atomnos12 = "12";
var atommass12 = "24.305 units";
//Aluminum
var name13 = "Aluminum";
var symbol13 = "Al";
var atomconfig13 = "[Ne]3s<sup>2</sup>3p<sup>1</sup>";
var cgb13 = "Post-Transition Metal";
var atomnos13 = "13";
var atommass13 = "26.982 units";
//Silicon
var name14 = "Silicon";
var symbol14 = "Si";
var atomconfig14 = "[Ne]3s<sup>2</sup>3p<sup>2</sup>";
var cgb14 = "Metalloid";
var atomnos14 = "14";
var atommass14 = "28.085 units";
//Phosphorus
var name15 = "Phosphorus";
var symbol15 = "P";
var atomconfig15 = "[Ne]3s<sup>2</sup>3p<sup>3</sup>";
var cgb15 = "Non-Metal";
var atomnos15 = "15";
var atommass15 = "30.974 units";
//Sulfur
var name16 = "Sulfur";
var symbol16 = "S";
var atomconfig16 = "[Ne]3s<sup>2</sup>3p<sup>4</sup>";
var cgb16 = "Non-Metal";
var atomnos16 = "16";
var atommass16 = "32.06 units";
//Chlorine
var name17 = "Chlorine";
var symbol17 = "Cl";
var atomconfig17 = "[Ne]3s<sup>2</sup>3p<sup>5</sup>";
var cgb17 = "Halogen";
var atomnos17 = "17";
var atommass17 = "35.45 units";
//Argon
var name18 = "Argon";
var symbol18 = "Ar";
var atomconfig18 = "[Ne]3s<sup>2</sup>3p<sup>6</sup>";
var cgb18 = "Noble Gas";
var atomnos18 = "18";
var atommass18 = "39.95 units";
//Potassium
var name19 = "Potassium";
var symbol19 = "K";
var atomconfig19 = "[Ar]4s<sup>1</sup>";
var cgb19 = "Alkali Metals";
var atomnos19 = "19";
var atommass19 = "39.098 units";
//Calcium
var name20 = "Calcium";
var symbol20 = "Ca";
var atomconfig20 = "[Ar]4s<sup>2</sup>";
var cgb20 = "Alkaline Earth Metals";
var atomnos20 = "20";
var atommass20 = "40.078 units";
//21-30
//Scandium
var name21 = "Scandium";
var symbol21 ="Sc";
var atomconfig21 = "[Ar]3d<sup>1</sup>4s<sup>2</sup>";
var cgb21 = "Transition Metal";
var atomnos21 = "21";
var atommass21 = "44.956 units";
//Titanium
var name22 = "Titanium";
var symbol22 = "Ti";
var atomconfig22 = "[Ar]3d<sup>2</sup>4s<sup>2</sup>";
var cgb22 = "Transition Metal";
var atomnos22 = "22";
var atommass22 = "47.867 units";
//Vanadium
var name23 = "Vanadium";
var symbol23 = "V";
var atomconfig23 = "[Ar]3d<sup>3</sup>4s<sup>2</sup>";
var cgb23 = "Transition Metal";
var atomnos23 = "23";
var atommass23 = "50.942 units";
//Chromium
var name24 = "Chromium";
var symbol24 = "Cr";
var atomconfig24 = "[Ar]3d<sup>4</sup>4s<sup>2</sup>";
var cgb24 = "Transition Metal";
var atomnos24 = "24";
var atommass24 = "51.996 units";
//Manganese
var name25 = "Manganese";
var symbol25 = "Mn";
var atomconfig25 = "[Ar]3d<sup>5</sup>4s<sup>2</sup>";
var cgb25 = "Transition Metal";
var atomnos25 = "25";
var atommass25 = "54.938 units";
//Iron
var name26 = "Iron";
var symbol26 = "Fe";
var atomconfig26 = "[Ar]3d<sup>6</sup>4s<sup>2</sup>";
var cgb26 = "Transition Metal";
var atomnos26 = "26";
var atommass26 = "55.845 units";
//Cobalt
var name27 = "Cobalt";
var symbol27 = "Co";
var atomconfig27 = "[Ar]3d<sup>7</sup>4s<sup>2</sup>";
var cgb27 = "Transition Metal";
var atomnos27 = "27";
var atommass27 = "58.933 units";
//Nickel
var name28 = "Nickel";
var symbol28 = "Ni";
var atomconfig28 = "[Ar]3d<sup>8</sup>4s<sup>2</sup>";
var cgb28 = "Transition Metal";
var atomnos28 = "28";
var atommass28 = "58.693 units";
//Copper
var name29 = "Copper";
var symbol29 = "Cu";
var atomconfig29 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>";
var cgb29 = "Transition Metal";
var atomnos29 = "29";
var atommass29 = "63.546 units";
//Zinc
var name30 = "Zinc";
var symbol30 = "Zn";
var atomconfig30 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>";
var cgb30 = "Transition Metal";
var atomnos30 = "30";
var atommass30 = "65.38 units";

//31-40
//Gallium
var name31 = "Gallium";
var symbol31 ="Ga";
var atomconfig31 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>";
var cgb31 = "Post Transition Metal";
var atomnos31 = "31";
var atommass31 = "69.723 units";
//Germanium
var name32 = "Germanium";
var symbol32 = "Ge";
var atomconfig32 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup>";
var cgb32 = "Metalloid";
var atomnos32 = "32";
var atommass32 = "72.630 units";
//Arsenic
var name33 = "Arsenic";
var symbol33 = "As";
var atomconfig33 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>";
var cgb33 = "Metalloid";
var atomnos33 = "33";
var atommass33 = "74.922 units";
//Selenium
var name34 = "Selenium";
var symbol34 = "Se";
var atomconfig34 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>";
var cgb34 = "Non-Metal";
var atomnos34 = "34";
var atommass34 = "78.971 units";
//Bromine
var name35 = "Bromine";
var symbol35 = "Br";
var atomconfig35 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>";
var cgb35 = "Halogen";
var atomnos35 = "35";
var atommass35 = "79.904 units";
//Krypton
var name36 = "Krypton";
var symbol36 = "Kr";
var atomconfig36 = "[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup>";
var cgb36 = "Noble Gas";
var atomnos36 = "36";
var atommass36 = "83.798 units";
//Rubidium
var name37 = "Rubidium";
var symbol37 = "Rb";
var atomconfig37 = "[Kr]5s<sup>1</sup>";
var cgb37 = "Alkali Metals";
var atomnos37 = "37";
var atommass37 = "85.468 units";
//Strontium
var name38 = "Strontium";
var symbol38 = "St";
var atomconfig38 = "[Kr]5s<sup>2</sup>";
var cgb38 = "Alkaline Earth Metals";
var atomnos38 = "38";
var atommass38 = "87.62 units";
//Yttrium
var name39 = "Yttrium";
var symbol39 = "Y";
var atomconfig39 = "[Kr]4d<sup>1</4d>5s<sup>2</sup>";
var cgb39 = "Transition Metal";
var atomnos39 = "39";
var atommass39 = "88.906 units";
//Zirconium
var name40 = "Zirconium";
var symbol40 = "Zr";
var atomconfig40 = "[Kr]4d<sup>2</4d>5s<sup>2</sup>";
var cgb40 = "Transition Metal";
var atomnos40 = "40";
var atommass40 = "91.224 units";

//41-50
//Niobium
var name41 = "Niobium";
var symbol41 ="Nb";
var atomconfig41 = "[Kr]4d<sup>4</sup>5s<sup>1</sup>";
var cgb41 = "Transition Metal";
var atomnos41 = "41";
var atommass41 = "92.906 units";
//Molybdenum
var name42 = "Molybdenum";
var symbol42 = "Mo";
var atomconfig42 = "[Kr]4d<sup>5</sup>5s<sup>1</sup>";
var cgb42 = "Transition Metal";
var atomnos42 = "42";
var atommass42 = "95.95 units";
//Technetium
var name43 = "Technetium";
var symbol43 = "Tc";
var atomconfig43 = "[Kr]4d<sup>5</sup>5s<sup>2</sup>";
var cgb43 = "Transition Metal";
var atomnos43 = "43";
var atommass43 = "98 units";
//Ruthenium
var name44 = "Ruthenium";
var symbol44 = "Ru";
var atomconfig44 = "[Kr]4d<sup>7</sup>5s<sup>1</sup>";
var cgb44 = "Transition Metal";
var atomnos44 = "44";
var atommass44 = "101.07 units";
//Rhodium
var name45 = "Rhodium";
var symbol45 = "Rh";
var atomconfig45 = "[Kr]4d<sup>8</sup>5s<sup>1</sup>4p<sup>5</sup>";
var cgb45 = "Transtion Metal";
var atomnos45 = "45";
var atommass45 = "102.906 units";
//Palladium
var name46 = "Palladium";
var symbol46 = "Pd";
var atomconfig46 = "[Kr]4d<sup>10</sup>";
var cgb46 = "Transition Metal";
var atomnos46 = "46";
var atommass46 = "106.42 units";
//Silver
var name47 = "Silver";
var symbol47 = "Ag";
var atomconfig47 = "[Kr]4d<sup>10</sup>5s<sup>1</sup>";
var cgb47 = "Transtion Metal";
var atomnos47 = "47";
var atommass47 = "107.868 units";
//Cadmium
var name48 = "Cadmium";
var symbol48 = "Cd";
var atomconfig48 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>";
var cgb48 = "Transition Metal";
var atomnos48 = "48";
var atommass48 = "112.414 units";
//Indium
var name49 = "Indium";
var symbol49 = "In";
var atomconfig49 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup>";
var cgb49 = "Post Transition Metal";
var atomnos49 = "49";
var atommass49 = "114.818 units";
//Tin
var name50 = "Tin";
var symbol50 = "Sn";
var atomconfig50 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup>";
var cgb50 = "Post Transition Metal";
var atomnos50 = "50";
var atommass50 = "118.710 units";

//51-60
//Antimony
var name51 = "Tin";
var symbol51 = "Sb";
var atomconfig51 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup>";
var cgb51 = "Metalloid";
var atomnos51 = "51";
var atommass51 = "121.760 units";
//Tellurium
var name52 = "Tellurium";
var symbol52 = "Te";
var atomconfig52 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup>";
var cgb52 = "Metalloid";
var atomnos52 = "52";
var atommass52 = "127.60 units";
//Iodine
var name53 = "Iodine";
var symbol53 = "I";
var atomconfig53 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup>";
var cgb53 = "Halogen";
var atomnos53 = "53";
var atommass53 = "126.904 units";
//Xenon
var name54 = "Xenon";
var symbol54 = "Xe";
var atomconfig54 = "[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup>";
var cgb54 = "Noble Gas";
var atomnos54 = "54";
var atommass54 = "131.293 units";
//Caesium
var name55 = "Caesium";
var symbol55 = "Cs";
var atomconfig55 = "[Xe]6s<sup>1</sup>";
var cgb55 = "Alkali Metals";
var atomnos55 = "55";
var atommass55 = "132.905 units";
//Barium
var name56 = "Barium";
var symbol56 = "Ba";
var atomconfig56 = "[Xe]6s<sup>2</sup>";
var cgb56 = "Alkaline Earth Metal";
var atomnos56 = "56";
var atommass56 = "137.327 units";
//Lanthanum
var name57 = "Lanthanum";
var symbol57 = "La";
var atomconfig57 = "[Xe]5d<sup>1</sup>6s<sup>2</sup>";
var cgb57 = "Lanthanide";
var atomnos57 = "57";
var atommass57 = "138.905 units";
//Cerium
var name58 = "Cerium";
var symbol58 = "Ce";
var atomconfig58 = "[Xe]4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup>";
var cgb58 = "Lanthanide";
var atomnos58 = "58";
var atommass58 = "140.116 units";
//Praseodymium
var name59 = "Praseodymium";
var symbol59 = "Pr";
var atomconfig59 = "[Xe]4f<sup>3</sup>6s<sup>2</sup>";
var cgb59 = "Lanthanide";
var atomnos59 = "59";
var atommass59 = "140.908 units";
//Neodymium
var name60 = "Neodymium";
var symbol60 = "Nd";
var atomconfig60 = "[Xe]4f<sup>4</sup>6s<sup>2</sup>";
var cgb60 = "Lanthanide";
var atomnos60 = "60";
var atommass60 = "144.242 units";

//61-70
//Promethium
var name61 = "Promethium";
var symbol61 = "Pm";
var atomconfig61 = "[Xe]4f<sup>5</sup>6s<sup>2</sup>";
var cgb61 = "Lanthanide";
var atomnos61 = "61";
var atommass61 = "145 units";
//Samarium
var name62 = "Samarium";
var symbol62 = "Sm";
var atomconfig62 = "[Xe]4f<sup>6</sup>6s<sup>2</sup>";
var cgb62 = "Lanthanide";
var atomnos62 = "62";
var atommass62 = "127.60 units";
//Europium
var name63 = "Europium";
var symbol63 = "Eu";
var atomconfig63 = "[Xe]4f<sup>7</sup>6s<sup>2</sup>";
var cgb63 = "Lanthanide";
var atomnos63 = "63";
var atommass63 = "151.964 units";
//Gadolinium
var name64 = "Gadolinium";
var symbol64 = "Gd";
var atomconfig64 = "[Xe]4f<sup>8</sup>6s<sup>2</sup>";
var cgb64 = "Lanthanide";
var atomnos64 = "64";
var atommass64 = "157.25 units";
//Terbium
var name65 = "Terbium";
var symbol65 = "Cs";
var atomconfig65 = "[Xe]4f<sup>9</sup>6s<sup>2</sup>";
var cgb65 = "Lanthanide";
var atomnos65 = "65";
var atommass65 = "158.925 units";
//Dysprosium
var name66 = "Dysprosium";
var symbol66 = "Dy";
var atomconfig66 = "[Xe]4f<sup>10</sup>6s<sup>2</sup>";
var cgb66 = "Lanthanide";
var atomnos66 = "66";
var atommass66 = "162.500 units";
//Holmium
var name67 = "Holmium";
var symbol67 = "Ho";
var atomconfig67 = "[Xe]4f<sup>11</sup>6s<sup>2</sup>";
var cgb67 = "Lanthanide";
var atomnos67 = "67";
var atommass67 = "164.930 units";
//Erbium
var name68 = "Erbium";
var symbol68 = "Er";
var atomconfig68 = "[Xe]4f<sup>12</sup>6s<sup>2</sup>";
var cgb68 = "Lanthanide";
var atomnos68 = "68";
var atommass68 = "167.259 units";
//Thulium
var name69 = "Thulium";
var symbol69 = "Tm";
var atomconfig69 = "[Xe]4f<sup>13</sup>6s<sup>2</sup>";
var cgb69 = "Lanthanide";
var atomnos69 = "69";
var atommass69 = "168.934 units";
//Ytterbium
var name70 = "Ytterbium";
var symbol70 = "Yb";
var atomconfig70 = "[Xe]4f<sup>14</sup>6s<sup>2</sup>";
var cgb70 = "Lanthanide";
var atomnos70 = "70";
var atommass70 = "173.045 units";
//71-80
//Lutetium
var name71 = "Lutetium";
var symbol71 = "Lu";
var atomconfig71 = "[Xe]4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup>";
var cgb71 = "Lanthanide";
var atomnos71 = "71";
var atommass71 = "174.967 units";
//Hafnium
var name72 = "Hafnium";
var symbol72 = "Hf";
var atomconfig72 = "[Xe]4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup>";
var cgb72 = "Transition Metal";
var atomnos72 = "72";
var atommass72 = "178.49 units";
//Tantalum
var name73 = "Tantalum";
var symbol73 = "Ta";
var atomconfig73 = "[Xe]4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup>";
var cgb73 = "Transition Metal";
var atomnos73 = "73";
var atommass73 = "180.948 units";
//Tungsten
var name74 = "Tungsten";
var symbol74 = "W";
var atomconfig74 = "[Xe]4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup>";
var cgb74 = "Transition Metal";
var atomnos74 = "74";
var atommass74 = "180.948 units";
//Rhenium
var name75 = "Rhenium";
var symbol75 = "Re";
var atomconfig75 = "[Xe]4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup>";
var cgb75 = "Transtion Metal";
var atomnos75 = "75";
var atommass75 = "158.925 units";
//Osmium
var name76 = "Osmium";
var symbol76 = "Os";
var atomconfig76 = "[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>";
var cgb76 = "Transition Metal";
var atomnos76 = "76";
var atommass76 = "190.23 units";
//Iridium
var name77 = "Iridium";
var symbol77 = "Ir";
var atomconfig77 = "[Xe]4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup>";
var cgb77 = "Transition Metal";
var atomnos77 = "77";
var atommass77 = "192.217 units";
//Platinum
var name78 = "Platinum";
var symbol78 = "Pt";
var atomconfig78 = "[Xe]4f<sup>14</sup>5d<sup>8</sup>6s<sup>2</sup>";
var cgb78 = "Transtion Metal";
var atomnos78 = "78";
var atommass78 = "195.084 units";
//Gold
var name79 = "Gold";
var symbol79 = "Au";
var atomconfig79 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup>";
var cgb79 = "Transition Metal";
var atomnos79 = "79";
var atommass79 = "196.967 units";
//Mercury
var name80 = "Mercury";
var symbol80 = "Hg";
var atomconfig80 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>";
var cgb80 = "Transition Metal";
var atomnos80 = "80";
var atommass80 = "200.592 units";
//81-90
//Thallium
var name81 = "Thallium";
var symbol81 = "Tl";
var atomconfig81 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup>";
var cgb81 = "Post Transition Metal";
var atomnos81 = "81";
var atommass81 = "204.38 units";
//Lead
var name82 = "Lead";
var symbol82 = "Pb";
var atomconfig82 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup>";
var cgb82 = "Post Transition Metal";
var atomnos82 = "82";
var atommass82 = "207.2 units";
//Bismoth
var name83 = "Bismoth";
var symbol83 = "Bi";
var atomconfig83 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup>";
var cgb83 = "Post Transition Metal";
var atomnos83 = "83";
var atommass83 = "208.980 units";
//Polonium
var name84 = "Polonium";
var symbol84 = "Po";
var atomconfig84 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup>";
var cgb84 = "Metalloid";
var atomnos84 = "84";
var atommass84 = "209 units";
//Astatine
var name85 = "Astatine";
var symbol85 = "At";
var atomconfig85 = "[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup>";
var cgb85 = "Halogen";
var atomnos85 = "85";
var atommass85 = "210 units";
//Radon
var name86 = "Radon";
var symbol86 = "Rn";
var atomconfig86 = "[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup>6p<sup>6</sup>";
var cgb86 = "Noble Gas";
var atomnos86 = "86";
var atommass86 = "222 units";
//Francium
var name87 = "Francium";
var symbol87 = "Fr";
var atomconfig87 = "[Rn]7s<sup>1</sup>";
var cgb87 = "Alkali Metal";
var atomnos87 = "87";
var atommass87 = "223 units";
//Radium
var name88 = "Radium";
var symbol88 = "Ra";
var atomconfig88 = "[Rn]7s<sup>2</sup>";
var cgb88 = "Alkaline Earth Metal";
var atomnos88 = "88";
var atommass88 = "226 units";
//Actinium
var name89 = "Actinium";
var symbol89 = "Ac";
var atomconfig89 = "[Rn]6d<sup>1</sup>7s<sup>2</sup>";
var cgb89 = "Actinide";
var atomnos89 = "89";
var atommass89 = "227 units";
//Thorium
var name90 = "Thorium";
var symbol90 = "Th";
var atomconfig90 = "[Rn]6d<sup>2</sup>7s<sup>2</sup>";
var cgb90 = "Actinide";
var atomnos90 = "90";
var atommass90 = "232.038 units";
//91-100
//Protactinium
var name91 = "Protactinium";
var symbol91 = "Pa";
var atomconfig91 = "[Rn]5f<sup>2</sup>6d<sup>1</sup>7s<sup>2</sup>";
var cgb91 = "Actinide";
var atomnos91 = "91";
var atommass91 = "231.36 units";
//Uranium
var name92 = "Uranium";
var symbol92 = "U";
var atomconfig92 = "[Rn]5f<sup>3</sup>6d<sup>1</sup>7s<sup>2</sup>";
var cgb92 = "Actinide";
var atomnos92 = "92";
var atommass92 = "238.029 units";
//Neptunium
var name93 = "Neptunium";
var symbol93 = "Np";
var atomconfig93 = "[Rn]5f<sup>4</sup>6d<sup>1</sup>7s<sup>2</sup>";
var cgb93 = "Actinide";
var atomnos93 = "93";
var atommass93 = "237 units";
//Plutonium
var name94 = "Plutonium";
var symbol94 = "Pu";
var atomconfig94 = "[Rn]5f<sup>6</sup>7s<sup>2</sup>";
var cgb94 = "Actinide";
var atomnos94 = "94";
var atommass94 = "244 units";
//Americium
var name95 = "Americium";
var symbol95 = "Am";
var atomconfig95 = "[Rn]5f<sup>7</sup>7s<sup>2</sup>";
var cgb95 = "Actinide";
var atomnos95 = "95";
var atommass95 = "243 units";
//Curium
var name96 = "Curium";
var symbol96 = "Cm";
var atomconfig96 = "[Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup>";
var cgb96 = "Actinide";
var atomnos96 = "96";
var atommass96 = "247 units";
//Berkelium
var name97 = "Berkelium";
var symbol97 = "Bk";
var atomconfig97 = "[Rn]5f<sup>9</sup>7s<sup>2</sup>";
var cgb97 = "Actinide";
var atomnos97 = "97";
var atommass97 = "247 units";
//Californium
var name98 = "Californium";
var symbol98 = "Cf";
var atomconfig98 = "[Rn]5f<sup>10</sup>7s<sup>2</sup>";
var cgb98 = "Actinide";
var atomnos98 = "98";
var atommass98 = "251 units";
//Einsteinium
var name99 = "Einsteinium";
var symbol99 = "Es";
var atomconfig99 = "[Rn]5f<sup>11</sup>7s<sup>2</sup>";
var cgb99 = "Actinide";
var atomnos99 = "99";
var atommass99 = "252 units";
//Fermium
var name100 = "Fermium";
var symbol100 = "Fm";
var atomconfig100 = "[Rn]5f<sup>12</sup>7s<sup>2</sup>";
var cgb100 = "Actinide";
var atomnos100 = "100";
var atommass100 = "257 units";
//101-110
//Mendelevium
var name101 = "Mendelevium";
var symbol101 = "Md";
var atomconfig101 = "[Rn]5f<sup>13</sup>7s<sup>2</sup>";
var cgb101 = "Actinide";
var atomnos101 = "101";
var atommass101 = "258 units";
//Nobelium
var name102 = "Nobelium";
var symbol102 = "No";
var atomconfig102 = "[Rn]5f<sup>14</sup>7s<sup>2</sup>";
var cgb102 = "Actinide";
var atomnos102 = "102";
var atommass102 = "259 units";
//Lawrencium
var name103 = "Lawrencium";
var symbol103 = "Lr";
var atomconfig103 = "[Rn]5f<sup>14</sup>7s<sup>2</sup>7p<sup>1</sup>";
var cgb103 = "Actinide";
var atomnos103 = "103";
var atommass103 = "262 units";
//Rutherfordium
var name104 = "Rutherfordium";
var symbol104 = "Rf";
var atomconfig104 = "[Rn]5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup>";
var cgb104 = "Transition Metal";
var atomnos104 = "104";
var atommass104 = "267 units";
//Dubnium
var name105 = "Dubnium";
var symbol105 = "Db";
var atomconfig105 = "[Rn]5f<sup>14</sup>6d<sup>3</sup>7s<sup>2</sup>";
var cgb105 = "Transition Metal";
var atomnos105 = "105";
var atommass105 = "268 units";
//Seaborgium
var name106 = "Seaborgium";
var symbol106 = "Sg";
var atomconfig106 = "[Rn]5f<sup>7</sup>6d<sup>4</sup>7s<sup>2</sup>";
var cgb106 = "Transition Metal";
var atomnos106 = "106";
var atommass106 = "269 units";
//Bohrium
var name107 = "Bohrium";
var symbol107 = "Bh";
var atomconfig107 = "[Rn]5f<sup>7</sup>6d<sup>5</sup>7s<sup>2</sup>";
var cgb107 = "Transition Metal";
var atomnos107 = "107";
var atommass107 = "270 units";
//Hassium
var name108 = "Hassium";
var symbol108 = "Hs";
var atomconfig108 = "[Rn]5f<sup>7</sup>6d<sup>6</sup>7s<sup>2</sup>";
var cgb108 = "Transition Metal";
var atomnos108 = "108";
var atommass108 = "269 units";
//Meitnerium
var name109 = "Mertnerium";
var symbol109 = "Mt";
var atomconfig109 = "[Rn]5f<sup>7</sup>6d<sup>7</sup>7s<sup>2</sup>";
var cgb109 = "Transtion Metal";
var atomnos109 = "109";
var atommass109 = "278 units";
//Darmstadtium
var name110 = "Darmstadtium";
var symbol110 = "Ds";
var atomconfig110 = "[Rn]5f<sup>7</sup>6d<sup>9</sup>7s<sup>1</sup>";
var cgb110 = "Transition Metal";
var atomnos110 = "110";
var atommass110 = "281 units";
//111-118
//Roentgenium
var name111 = "Roentgenium";
var symbol111 = "Rg";
var atomconfig111 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>1</sup>";
var cgb111 = "Transition Metal";
var atomnos111 = "111";
var atommass111 = "280 units";
//Copernicium
var name112 = "Copernicium";
var symbol112 = "Cn";
var atomconfig112 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>";
var cgb112 = "Transition Metal";
var atomnos112 = "112";
var atommass112 = "285 units";
//Nihonium
var name113 = "Nihonium";
var symbol113 = "Nh";
var atomconfig113 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>1</sup>";
var cgb113 = "Post Transition Metal";
var atomnos113 = "113";
var atommass113 = "286 units";
//Flerovium
var name114 = "Flerovium";
var symbol114 = "Fl";
var atomconfig114 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>2</sup>";
var cgb114 = "Post Transition Metal";
var atomnos114 = "114";
var atommass114 = "289 units";
//Moscovium
var name115 = "Moscovium";
var symbol115 = "Mc";
var atomconfig115 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>3</sup>";
var cgb115 = "Post Transition Metal";
var atomnos115 = "115";
var atommass115 = "289 units";
//Livermorium
var name116 = "Livermorium";
var symbol116 = "Lv";
var atomconfig116 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>4</sup>";
var cgb116 = "Post Transition Metal";
var atomnos116 = "116";
var atommass116 = "293 units";
//Tennessine
var name117 = "Tennessine";
var symbol117 = "Ts";
var atomconfig117 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>5</sup>";
var cgb117 = "Halogen";
var atomnos117 = "117";
var atommass117 = "294 units";
//Oganesson
var name118 = "Oganesson";
var symbol118 = "Og";
var atomconfig118 = "[Rn]5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>6</sup>";
var cgb118 = "Noble Gas";
var atomnos118 = "118";
var atommass118 = "294 units";



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
var error_counter = document.getElementById("error-count");
var error_div = document.getElementById("error-div");

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
var lcl = document.getElementById("lcl");
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
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var trigger = document.getElementById("trigger");
var sei = document.getElementById("sei-div");
var ec = document.getElementById("error-close");
var ah = document.getElementById("athena-head");
var rab = document.getElementById("rab");

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
var aid = document.getElementById("credit-modal");
var caid = document.getElementById("close-infos");
var oaid = document.getElementById("athena-head");
var lul = document.getElementById("lul");
var luldiv = document.getElementById("luldiv");
var clul = document.getElementById("clul");

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
var errorid = document.getElementById("eid");
var errormsg = document.getElementById("error-msg")
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
var sfv = document.getElementById("sei-input");
var sf = document.getElementById("search-element-id");
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
        flourine();hideSei();openDataPreview();//flourine
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
var odp = document.getElementById("odp");
odp.addEventListener("click", openDataPreview);

//Check ODP
function checkOdpvalue() {
    //Checks Open Data Preview Value if there's a valid value
    if(epan.innerText == "#") {
        addError();
        errorMATOE002();
    }
}

var expand = document.getElementById("expand");

expand.addEventListener("click", errorMATOE005);
expand.addEventListener("click", addError);

//Periodic-element-groups view
//Variables
var AlkaliMetals = document.querySelectorAll(".alkali-metals");
var AlkalineEarthMetals = document.querySelectorAll(".alkaline-earth-metals");
var TransitionMetals = document.querySelectorAll(".transition-metals");
var PostTransitionMetals = document.querySelectorAll(".post-transition-metal");
var NonMetal = document.querySelectorAll(".non-metal");
var Halogen = document.querySelectorAll(".halogen");
var NobleGas = document.querySelectorAll(".noble-gas");
var Metalloid = document.querySelectorAll(".metalloid");
var Lanthanide = document.querySelectorAll(".lanthanide");
var Actinide = document.querySelectorAll(".actinide");

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