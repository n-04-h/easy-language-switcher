# easy-language-switcher
Use HTML, CSS and JS (optional jquery) to create a dynamic language switcher for your website

GERMAN:
Ich habe gerade mein Portfolio gecodet, dann ist mir aufgefallen, dass ich es sowohl in englisch als auch in deutsch verfügbar machen möchte. Als ich mir dann andere Websites/Portfolios angeschaut habe fiel mir auf, dass viele dies mittels separierter Verzeichnisse lösen.

URL Beispiel -> www.meinportfolio.com/DE/index.html bzw. -> www.meinportfolio.com/EN/index.html

Diese Methode ist nicht verwerflich! Dennoch stören mich zwei Dinge daran.
1. Alle Files welche sowohl in englisch als auch in deutsch zugänglich sein sollen müssen doppelt angelegt werden.
2. Das ändern der Sprache erfordert ein neu laden der Seite.

Wegen diesen zwei "Problemen" habe ich beschlossen eine andere Logik zu verwenden.
Bestimmt ist mein Ansatz ausbaufähig, wenn jemand aber nach einer relativ simplen Lösung sucht, sollte dieses Beispiel aussreichen.
Ich bin natürlich Dankbar für Feedback und Verbesserungs Vorschläge.

 
Was braucht ihr dafür und was ist optional:

wichtig:
 - html
 - css
 - javascript

optional:
 - jquery:



Ich versuche die Inhalte und die damit verbundene Logik kurz zusammenzufassen:

HTML:-------------------------------------------------------------------------------------------------------------------------

4 files:
  - index.html        // hier ist ein zusätzliche typeIt Animation verbaut welche anfangs für schwierigkeiten sorgte.
  - about.html        // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert
  - portfolio.html    // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert
  - contact.html      // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert

In diesen Dateien ist überall:
 - die selbe css und js Datei eingebunden
 - außerdem verfügen sie alle über den Sprachen Toggle-Button
   - Beim drücken des Tags erscheint jeweils der andere Tag
   - außerdem ändert sich der URL parameter (um es verständlicher zu machen, könnte man auch weg lassen wirkt aber konsistenter).


CSS:--------------------------------------------------------------------------------------------------------------------------

wichtig:
 - position: der <span> Tags (identisch)
 - display: hidden

optional:
 - span:
   - hover state (color: green)
 - index.html:
   - text line


JAVASCRIPT:-------------------------------------------------------------------------------------------------------------------

 - Überprüfen der aktuellen URL beim laden der Seite
 - Ändern der Texte im HTML
 - Übergabe der aktuell gesetzten Sprache mittels Parameter in der aufzurufenden URL


JQUERY:-----------------------------------------------------------------------------------------------------------------------

 - Vereinfachte Auswahl der Selektoren
 - Methode append()
 - Methode fadeIn / fadeOut




ENGLISH:----> wird noch hinzugefügt.
