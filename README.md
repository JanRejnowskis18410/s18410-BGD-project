# BGDChat

## Wymagania

Aplikacja wymaga stworzenia swojego Upload Presetu na platformie Cloudinary (https://cloudinary.com/documentation/upload_presets) do przechowywania zdjęć profilowych uzytkowników.

**UWAGA!**: Aplikacja była stworzona tylko dla nauki z uzyciem Presetu w trybie Unsigned i tak nalezy równiez skonfigurować stworzony Preset. W prawdziwych warunkach jednak powinniśmy uzywać ustawienia Signed i stworzyć klucz API dla naszej aplikacji.

## Instalacja

1. Ustawiamy zmienne w pliku .env w folderze frontend:

   1. REACT_APP_UPLOAD_PRESET - nazwa upload presetu stworzonego na platformie Cloudinary (https://cloudinary.com/documentation/upload_presets#managing_upload_presets_using_the_settings_ui)
   2. REACT_APP_CLOUD_NAME - nazwa naszego clouda stworzonego na platformie Cloudinary.
   3. REACT_APP_CLOUDINARY_URL= URL Cloudinary. Powinnien mieć format: https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload

2. Uruchamiamy aplikację (dodatkowo mozemy uzyć flagi -d aby uruchomić ją w trybie detached):

```
docker-compose up --build [-d]
```

3. Backend powinien teraz działać na porcie 3000 a frontend na 5173. Do bazy zostaną automatycznie dodani 4 userzy testowi, kazdy z tym samym hasłem: 12345.

   1. kowalski@example.com
   2. nowak@example.com
   3. testowy@example.com
   4. adamska@example.com
