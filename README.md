# easy-language-switcher
Use HTML, CSS and JS (optional jquery) to create a dynamic language switcher for your website

GERMAN:
Ich habe gerade mein Portfolio gecodet als mir aufgefallen ist, dass ich es gerne sowohl in englisch als auch in deutsch verfügbar machen möchte.
Als ich mir dann andere Websites/Portfolios angesehen habe fiel mir auf, dass viele Leute auf die Methodik der Separierten Ordner zurückgreifen.

URL Beispiel -> www.meinportfolio.com/DE/index.html bzw. -> www.meinportfolio.com/EN/index.html

Diese Methode ist weit verbreitet und auch nicht verwerflich! Dennoch stören mich zwei Dinge daran.
1. Alle Files welche sowohl in englisch als auch in deutsch zugänglich sein sollen müssen doppelt angelegt werden.
2. Das ändern der Sprache erfordert ein neu laden der Seite.

Wegen diesen zwei "Problemen" habe ich beschlossen eine andere Logik zu verwenden.
Bestimmt ist mein Ansatz ausbaufähig, wenn jemand aber nach einer simplen Lösung sucht, sollte dieses Beispiel aussreichen.
Ich bin natürlich offen für feedback und Verbesserungs Vorschläge.


Was braucht ihr und was ist optional:

wichtig:
 - html
 - css
 - javascript

optional:
 - jquery:



Ich versuche die Inhalte und die damit verbundene Logik kurz zusammenzufassen:

HTML:-------------------------------------------------------------------------------------------------------------------------

4 files:
  - index.html
  - about.html        // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert
  - portfolio.html    // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert
  - contact.html      // dient lediglich der demonstration, damit ihr seht, dass das übergeben der Sprache funktioniert

In diesen Dateien ist überall die selbe css und js datei einzubinden, außerdem verfügen sie alle über den toggle Button
    - Toggle Button (2x <span>)
      Funktion:
      - Beim drücken des Tags erscheint jeweils der andere Tag
      
      - Es ändert sich der URL parameter (um es verständlicher zu machen, könnte man auch weg lassen wirkt aber konsistenter)


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
