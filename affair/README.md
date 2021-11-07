## pride

`pride` is the codebase of the Django server that handles all the logic of uanlove.

---

## Install dependencies

In order to create our Python environment with all the dependencies, you need `anaconda` or `miniconda`.

Re-create the environment from the file as follows:

```bash
conda env create -f environment.yml
```

Alternatively, if you are using another environment wrapper, just install the requirements. Just make sure your environment is running `Python 3.7.11`:

```bash
pip install -r requirements.txt
```

---

## Environment variables

Once you have all the dependencies installed, create a `.env` file with the following data:

```bash
SECRET_KEY="ultrasecretkey"
MICROSOFT_LOGIN_CALLBACK_URL="ultrasecretcallback"
LOCALHOST_IPV4="ultrasecretip"
```

Replace the values with valid strings.

---

## Run server

Run the local server on default port 8000:

```bash
python manage.py runserver
```

## [OPTIONAL] Connect local server to React Native
If you want to debug locally along the React Native project (`pride`), expose the server to your network as follows:

```bash
python manage.py runserver 0:8080
```

Then, redirect all the requests to the following URL:
```bash
http://<your-ipv4>:8080/
```