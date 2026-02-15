# Security Policy

## Reporting a Vulnerability

If you find a security issue, please report it privately first:

- Open a private security advisory on GitHub (preferred), or
- Contact the maintainer directly

Please include:

- Affected file(s) and feature
- Reproduction steps
- Impact assessment
- Suggested fix (if available)

## Secret Handling

- Do not commit API keys
- Use local storage/runtime input for credentials
- Rotate exposed keys immediately if leaked
