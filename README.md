BACKEND:
wsl
docker exec
mappa kiválasztása
.env létrehozása(másolás átírás, SESSION_DRIVER=file)
kell php artisan migrate
php artisan migrate:fresh --seed
php artisan key:generate
php artisan serve --host=0.0.0.0 --port=8000

FRONEND:
wsl
docker exec
mappa kiválasztás
npm install bootstrap
npm install axios
npm start
miután elindítottad létre kell hozni a Context-et, a Componentset, meg azokat amiket adnak a megfelelő formátumban
majd állítsd le a szervert és add ki  anpm install reat-router parancsot

az index.js-be kell importálni a bootstrapet (import "bootstrap/dist/css/bootstrap.min.css";)

az "rfc"-vel gyorsan létre lehet hozni az alapot  


NavLink:
Nincs teljes oldalfrissítés — a NavLink/Link kliensoldalon navigál, így megmarad az alkalmazás állapota és gyorsabb a váltás.

Aktív állapot kezelése — NavLink egyszerűen jelzi, hogy az adott útvonal épp aktív (isActive) — így könnyen adhatsz hozzá aktív CSS osztályt vagy inline stílust. (<a>-val ezt kézzel kéne megoldani.)

Részletes egyezés — beállítható az end (v6) vagy exact (v5) viselkedés, hogy pontosan vagy részben egyezzen az útvonal.

További props-ok — replace, state, objektumként átadható to (pathname, search, hash), ami hasznos lehet navigation history kezeléséhez.

Accessibility — NavLink automatikusan kezeli az aria-current="page" attribútumot az aktív linknél, ha szükséges.


az importja nem sima react hanem react-router a végén és import után {} közé írjuk

Outlet:

Az <Outlet /> a React Router egyik alap komponense.
Feladata: ott jeleníti meg a gyerekútvonalak (child routes) tartalmát, ahol elhelyezed.

Egyszerűbben:
Az <Outlet /> egy "lyuk" az oldaladon, amibe a router a belső, mélyebb útvonal komponenseket betölti.

Működés:
Ha egy route-odnak vannak alútvonalai, akkor a szülő komponensben muszáj egy <Outlet />-et elhelyezni, különben a gyerek route-ok nem jelennek meg.

return után úgy írjuk mint egy html-t


