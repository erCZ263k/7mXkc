function rep_Dnk() {
document.getElementById("today").innerHTML = getdayNames[(getNow.getDay())] + ", den " + getNow.getDate() + ". " + getdayMonth[(getNow.getMonth())];
document.body.innerHTML = document.body.innerHTML
.replaceAll("ATTENTION: Sale Ends Today", "OPMÆRKSOMHED: Udsalget Slutter i Dag")
.replaceAll("WARNING:</b></span> Due to extremely high media demand, there is limited supply of", "ADVARSEL:</b></span> På grund af ekstrem høj medieefterspørgsel er der begrænset udbud af")
.replaceAll("in stock as of", "på lager fra den")
.replaceAll("Sunday", "søndag")
.replaceAll("Monday", "mandag")
.replaceAll("Tuesday", "tirsdag")
.replaceAll("Wednesday", "onsdag")
.replaceAll("Thursday", "torsdag")
.replaceAll("Friday", "fredag")
.replaceAll("Saturday", "lørdag")
.replaceAll("January", "januar")
.replaceAll("February", "februar")
.replaceAll("March", "marts")
.replaceAll("April", "april")
.replaceAll("May", "maj")
.replaceAll("June", "juni")
.replaceAll("July", "juli")
.replaceAll("August", "august")
.replaceAll("September", "september")
.replaceAll("October", "oktober")
.replaceAll("November", "november")
.replaceAll("December", "december")
.replaceAll("Up to [DiscountValue] Discount", "Op Til [DiscountValue] Rabat")
.replaceAll("Sell Out Risk", "Udsalgsrisiko")
.replaceAll("<u>HIGH</u>", "<u>HØJ</u>")
.replaceAll("Buy the official here", "Køb det officielle her")
.replaceAll("RUSH MY ORDER NOW", "BESTIL NU")
.replaceAll("ORDER NOW", "BESTIL NU")
.replaceAll("BUY THE OFFICIAL NOW", "KØB DET OFFICIELLE NU")
.replaceAll("GET LAST UNITS WITH DISCOUNT", "FÅ SIDSTE ENHEDER MED RABAT NU")
.replaceAll("Hurry, you'll <u>lose</u> your discount in", "Skynd dig, du <u>mister</u> din rabat på")
.replaceAll("Please, wait a few seconds for the page to load after clicking in the button", "Vent venligst et par sekunder på, at siden indlæses, efter du har klikket på knappen")
.replaceAll("Secure Payments", "Sikre Betalinger")
.replaceAll("24/7 Dedicated", "24/7 Dedikeret")
.replaceAll("Support", "Støtte")
.replaceAll("<span style=\"color:#F19220;\">[GuaranteeDays]</span> Day Guarantee", "<span style=\"color:#F19220;\">[GuaranteeDays]</span> Dages Garanti")
.replaceAll("Save Up To <span style=\"color:#F19220;\">[DiscountValue]", "Spar op Til <span style=\"color:#F19220;\">[DiscountValue]")
.replaceAll("[ProductName] incredible formula brings together high quality raw ingredients sourced from different parts of the world that work in synergy for maximum performance.", "[ProductName] utrolige formel samler råvarer af høj kvalitet hentet fra forskellige dele af verden, som arbejder i synergi for maksimal ydeevne.")
.replaceAll("Save Up To <span style=\"color: #F19220;\">[DiscountValue]</span> Buying Now!", "Spar op Til <span style=\"color: #F19220;\">[DiscountValue]</span> Ved at Købe Det Nu!")
.replaceAll("Natural Formula", "Naturlig Formel")
.replaceAll("YOU’RE PROTECTED BY THE <span style=\"color: #F19220;\">[GuaranteeDays]-DAY MONEY BACK</span> GUARANTEE!", "DU ER BESKYTTET AF <span style=\"color: #F19220;\">[GuaranteeDays] DAGES PENGE TILBAGE</span> GARANTI!")
.replaceAll("The sellers are so confident with [ProductName] and services, that they back it with a <b>[GuaranteeDays] day money back guarantee</b>.", "Sælgerne er så sikre på [ProductName] og disse tjenester, at de bakker det op med en <b>[GuaranteeDays] dages pengene-tilbage-garanti</b>.")
.replaceAll("If for any reason you are not fully satisfied with their products, simply return the purchased products in the original container within [GuaranteeDays] days of when you received your order.", "Hvis du af en eller anden grund ikke er fuldt ud tilfreds med deres produkter, skal du blot returnere de købte produkter i den originale beholder inden for [GuaranteeDays] dage efter, at du har modtaget din ordre.")
.replaceAll("They will refund you 100% of the purchase price, with absolutely no hassle.", "De refunderer dig 100% af købsprisen, helt uden besvær.")
.replaceAll("BUY WITH GUARANTEE", "KØB MED GARANTI")
.replaceAll("Claim Your Discounted <span style=\"color: #F19220;\">[ProductName]</span> Below While Stocks Last", "Gør Krav på Dit Nedsatte <span style=\"color: #F19220;\">[ProductName]</span> Nedenfor, Så Længe Lager Haves")
.replaceAll("MONEY BACK GUARANTEE !", "PENGE TILBAGE GARANTI !")
.replaceAll("Terms", "Betingelser")
.replaceAll("Privacy", "Privatlivspolitik")
.replaceAll("Contact", "Kontakt")
.replaceAll("Shipping", "Forsendelse")
.replaceAll("Disclaimer", "Ansvarsfraskrivelse")
.replaceAll("Order Now | All rights reserved", "Bestil Nu | Alle rettigheder forbeholdes")
} rep_Dnk();
