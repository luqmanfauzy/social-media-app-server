# Social Media App Server

Backend server untuk aplikasi social media menggunakan Express, TypeScript, MongoDB, Mongoose, dan Inngest.

## Tech Stack

- Node.js
- TypeScript
- Express 5
- MongoDB dengan Mongoose
- Inngest
- Docker

## Prerequisites

- Node.js 22 atau lebih baru
- npm
- Docker

## Installation

Install dependency project:

```bash
npm install
```

### MongoDB

Project ini menggunakan MongoDB pada port `27017`. Jalankan MongoDB menggunakan Docker:

```bash
docker volume create social-media-mongo-data

docker run -d \
  --name social-media-mongo \
  -p 27017:27017 \
  -v social-media-mongo-data:/data/db \
  --restart unless-stopped \
  mongo:7.0
```

Jika container sudah pernah dibuat, jalankan kembali dengan:

```bash
docker start social-media-mongo
```

Periksa status MongoDB:

```bash
docker ps --filter name=social-media-mongo
```

### Environment Variables

Buat file `.env` di root project:

```env
MONGO_URL=mongodb://127.0.0.1:27017/social-media
PORT=4000
```

File `.env` tidak boleh di-commit karena berisi konfigurasi lokal dan sudah
terdaftar di `.gitignore`.

## Running the Server

Jalankan server dalam mode development:

```bash
npm start
```

Server berjalan pada:

```text
http://localhost:4000
```

Verifikasi server:

```bash
curl http://localhost:4000/
```

Response yang diharapkan:

```text
Hello World!
```

## Endpoints

| Method | Endpoint | Keterangan |
| --- | --- | --- |
| GET | `/` | Memeriksa status server |
| GET | `/api/inngest` | Endpoint Inngest |
| POST | `/api/inngest` | Endpoint Inngest |
| PUT | `/api/inngest` | Endpoint Inngest |

Endpoint Inngest digunakan untuk memproses event dari Clerk.

Event yang didukung:

- `clerk/user.created`
- `clerk/user.updated`
- `clerk/user.deleted`

## Project Structure

```text
.
├── configs/
│   └── db.ts              # Koneksi MongoDB
├── inngest/
│   └── index.ts           # Inngest client dan functions
├── models/
│   └── User.ts            # Schema User MongoDB
├── server.ts              # Entry point Express server
├── package.json
└── .env
```

## Stopping Services

Hentikan server dengan menekan `Ctrl+C`, lalu hentikan MongoDB dengan:

```bash
docker stop social-media-mongo
```

Data MongoDB tetap tersimpan pada Docker volume `social-media-mongo-data`.
