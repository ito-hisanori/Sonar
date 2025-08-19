import 'dotenv/config';
import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 3000;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

app.use(express.json());

// 登録
async function addEvents(id, spotId, name) {
  const { data, error } = await supabase
    .from('events')
    .insert([
      {
        id: id,
        spot_id: spotId,
        name: name,
      },
    ])
    .select();
}

async function addUsers(id, sex) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ id: id, sex: sex }])
    .select();
}

async function addSpots(id) {
  const { data, error } = await supabase
    .from('spots')
    .insert([{ id: id }])
    .select();
}

async function addBuddies(id) {
  const { data, error } = await supabase
    .from('buddies')
    .insert([{ id: id }])
    .select();
}

async function addComments(id) {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ id: id }])
    .select();
}

async function addRecords(id) {
  const { data, error } = await supabase
    .from('records')
    .insert([{ id: id }])
    .select();
}

async function addEventUsers(id) {
  const { data, error } = await supabase
    .from('records')
    .insert([{ id: id }])
    .select();
}

// 取得
async function getBuddies() {
  const { data: buddies, error } = await supabase.from('buddies').select('*');
  if (error) {
  } else {
  }
}

async function getComments() {
  const { data: comments, error } = await supabase.from('comments').select('*');
  if (error) {
  } else {
  }
}

async function getEventUsers() {
  const { data: eventUsers, error } = await supabase.from('event_users').select('*');
  if (error) {
  } else {
  }
}

async function getEvents() {
  const { data: events, error } = await supabase.from('events').select('*');
  if (error) {
  } else {
  }
}

async function getRecords() {
  const { data: records, error } = await supabase.from('records').select('*');
  if (error) {
  } else {
  }
}

async function getSpots() {
  const { data: spots, error } = await supabase.from('spots').select('*');
  if (error) {
  } else {
  }
}

async function getUsers() {
  const { data: users, error } = await supabase.from('users').select('*');
  if (error) {
  } else {
  }
}

// 編集

// 削除
async function deleteBuddies(id) {
  const response = await supabase.from('buddies').delete().eq('id', id);
}

async function deleteComments(id) {
  const response = await supabase.from('comments').delete().eq('id', id);
}

async function deleteEventUsers(id) {
  const response = await supabase.from('event_users').delete().eq('id', id);
}

async function deleteEvents(id) {
  const response = await supabase.from('events').delete().eq('id', id);
}

async function deleteRecords(id) {
  const response = await supabase.from('records').delete().eq('id', id);
}

async function deleteSpots(id) {
  const response = await supabase.from('spots').delete().eq('id', id);
}

async function deleteUsers(id) {
  const response = await supabase.from('users').delete().eq('id', id);
}

app.get('/', (req, res) => {
  res.send('Welcome to express!');
});

app.listen(PORT, () => {});

// sign up
// app.post('/signup', (req, res) => {
//   const payload = {
//     firstname: req.body.firstname,
//     familyname: req.body.familyname,
//     email: req.body.email,
//     password: req.body.password,
//   };

//   // const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

//   const body = {
//     firstname: req.body.firstname,
//     familyname: req.body.familyname,
//     email: req.body.email,
//     password: req.body.password,
//     // token: token,
//   };

//   res.status(200).json(body);
//   deleteSpots();
// });
