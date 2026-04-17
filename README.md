# Gacha API (Backend Programming)

Project ini saya buat untuk tugas backend, isinya tentang sistem gacha sederhana pakai Node.js dan MongoDB.

---

## Fitur

- Bisa gacha (kadang zonk, kadang dapet hadiah)
- Ada limit 5x per hari per user
- Ada sistem kuota hadiah
- Bisa lihat history gacha
- Bisa lihat list hadiah dan pemenang

---

## Teknologi

- Node.js
- Express
- MongoDB Atlas
- Mongoose

---

## Cara jalanin

1. Install dulu:

```
npm install
```

2. Isi file `.env`:

```
PORT=5000
DB_CONNECTION=your_connection_string
DB_NAME=demo-db
```

3. Jalankan:

```
npm run dev
```

---

## Endpoint

### Gacha

POST `/api/gacha`

body:

```
{
  "userId": "user1"
}
```

response bisa:

```
{
  "message": "Selamat!",
  "reward": "Smartphone X"
}
```

atau:

```
{
  "message": "Zonk",
  "reward": null
}
```

---

### History

GET `/api/gacha/history?userId=user1`

---

### Rewards

GET `/api/rewards`

---

### Winners

GET `/api/rewards/winners`

---

## Catatan

- Setiap user cuma bisa gacha 5x sehari
- Kalau hadiah habis (quota penuh), tidak bisa didapat lagi
- Hasil gacha random

---

## Struktur (singkat)

```
src/api/components/
- gacha
- rewards
- users
- books
```

---

## Penutup

Project ini masih sederhana tapi sudah mencakup fitur utama dari sistem gacha.
