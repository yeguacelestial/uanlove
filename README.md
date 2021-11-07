
<p align="center">
  <image src="logo.svg"/>
</p>

____
## Structure

| Codebase              |      Description          |
| :-------------------- | :-----------------------: |
| [pride](pride)        |     React Native App      |
| [affair](affair)      |     Django Server         |

## What is this?

uanlove is a project made for fun by students, to students.

We wanted to create our own Tinder UANL as a good alternative to Facebook groups, so we are building it ourselves.

## Limit access to UANL students

So far, this mobile app is only approaching UANL students and anyone with a @uanl.edu.mx email. To automate things, we integrated the school Microsoft Azure AD with our API. This is how our auth flow works:

<p align="center">
  <image src="auth-flow.drawio.png"/>
</p>