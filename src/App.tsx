// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
const season1 = "Season #1";
const season2 = "Season #2";
const season3 = "Season #3";
const noImage = "https://docs.google.com/drawings/d/e/2PACX-1vTp0pCZBSnJqN3oio54HByICauB0sfEKLX1-lqc7R17BBPqqGrAlyUdcbPWSTsRRvJrMT5kdvPJFcDR/pub?w=1500&h=1500";
const App: React.FC = () => {
  const testSchedule = [{ week: 1, date: "2025-03-16", time: "6:00 PM CST", team1: { name: "Blue" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:10 PM CST", team1: { name: "Purple" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:15 PM CST", team1: { name: "Orange" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:20 PM CST", team1: { name: "Green" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:25 PM CST", team1: { name: "Diamond" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:30 PM CST", team1: { name: "Tan" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:35 PM CST", team1: { name: "Arctic" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:40 PM CST", team1: { name: "Navy" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:45 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 1, date: "2025-03-16", time: "6:50 PM CST", team1: { name: "Emerald" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:00 PM CST", team1: { name: "Indigo" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:10 PM CST", team1: { name: "Coral" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:15 PM CST", team1: { name: "Cyan" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:20 PM CST", team1: { name: "Cerulean" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:25 PM CST", team1: { name: "Red" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:30 PM CST", team1: { name: "Diamond" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:35 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:40 PM CST", team1: { name: "Yellow" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:45 PM CST", team1: { name: "Teal" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 2, date: "2025-03-23", time: "6:50 PM CST", team1: { name: "Crimson" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:00 PM CST", team1: { name: "Purple" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:10 PM CST", team1: { name: "Navy" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:15 PM CST", team1: { name: "Blue" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:20 PM CST", team1: { name: "Tan" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:25 PM CST", team1: { name: "Emerald" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:30 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:35 PM CST", team1: { name: "Crimson" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:40 PM CST", team1: { name: "Orange" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:45 PM CST", team1: { name: "Arctic" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 3, date: "2025-03-30", time: "6:50 PM CST", team1: { name: "Olive" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:00 PM CST", team1: { name: "Coral" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:10 PM CST", team1: { name: "Green" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:15 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:20 PM CST", team1: { name: "Red" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:25 PM CST", team1: { name: "Cerulean" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:30 PM CST", team1: { name: "Diamond" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:35 PM CST", team1: { name: "Teal" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:40 PM CST", team1: { name: "Yellow" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:45 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 4, date: "2025-04-06", time: "6:50 PM CST", team1: { name: "Cyan" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:00 PM CST", team1: { name: "Emerald" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:10 PM CST", team1: { name: "Blue" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:15 PM CST", team1: { name: "Tan" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:20 PM CST", team1: { name: "Arctic" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:25 PM CST", team1: { name: "Indigo" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:30 PM CST", team1: { name: "Olive" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:35 PM CST", team1: { name: "Crimson" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:40 PM CST", team1: { name: "Orange" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:45 PM CST", team1: { name: "Red" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 5, date: "2025-04-13", time: "6:50 PM CST", team1: { name: "Purple" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:00 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:10 PM CST", team1: { name: "Green" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:15 PM CST", team1: { name: "Navy" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:20 PM CST", team1: { name: "Cerulean" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:25 PM CST", team1: { name: "Yellow" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:30 PM CST", team1: { name: "Teal" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:35 PM CST", team1: { name: "Olive" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:40 PM CST", team1: { name: "Diamond" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:45 PM CST", team1: { name: "Cyan" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 6, date: "2025-04-20", time: "6:50 PM CST", team1: { name: "Coral" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:00 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:10 PM CST", team1: { name: "Emerald" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:15 PM CST", team1: { name: "Orange" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:20 PM CST", team1: { name: "Cerulean" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:25 PM CST", team1: { name: "Arctic" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:30 PM CST", team1: { name: "Crimson" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:35 PM CST", team1: { name: "Red" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:40 PM CST", team1: { name: "Purple" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:45 PM CST", team1: { name: "Tan" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 7, date: "2025-04-27", time: "6:50 PM CST", team1: { name: "Blue" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:00 PM CST", team1: { name: "Navy" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:10 PM CST", team1: { name: "Yellow" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:15 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:20 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:25 PM CST", team1: { name: "Cyan" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:30 PM CST", team1: { name: "Green" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:35 PM CST", team1: { name: "Olive" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:40 PM CST", team1: { name: "Teal" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:45 PM CST", team1: { name: "Indigo" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 8, date: "2025-05-04", time: "6:50 PM CST", team1: { name: "Diamond" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:00 PM CST", team1: { name: "Arctic" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:10 PM CST", team1: { name: "Teal" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:15 PM CST", team1: { name: "Red" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:20 PM CST", team1: { name: "Blue" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:25 PM CST", team1: { name: "Orange" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:30 PM CST", team1: { name: "Tan" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:35 PM CST", team1: { name: "Crimson" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:40 PM CST", team1: { name: "Cerulean" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:45 PM CST", team1: { name: "Purple" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 9, date: "2025-05-11", time: "6:50 PM CST", team1: { name: "Emerald" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:00 PM CST", team1: { name: "Cyan" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:10 PM CST", team1: { name: "Coral" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:15 PM CST", team1: { name: "Navy" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:20 PM CST", team1: { name: "Olive" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:25 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:30 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:35 PM CST", team1: { name: "Green" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:40 PM CST", team1: { name: "Diamond" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:45 PM CST", team1: { name: "Indigo" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 10, date: "2025-05-18", time: "6:50 PM CST", team1: { name: "Yellow" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:00 PM CST", team1: { name: "Orange" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:10 PM CST", team1: { name: "Red" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:15 PM CST", team1: { name: "Arctic" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:20 PM CST", team1: { name: "Cyan" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:25 PM CST", team1: { name: "Crimson" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:30 PM CST", team1: { name: "Purple" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:35 PM CST", team1: { name: "Cerulean" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:40 PM CST", team1: { name: "Teal" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:45 PM CST", team1: { name: "Emerald" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 11, date: "2025-05-25", time: "6:50 PM CST", team1: { name: "Blue" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:00 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:10 PM CST", team1: { name: "Yellow" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:15 PM CST", team1: { name: "Olive" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:20 PM CST", team1: { name: "Green" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:25 PM CST", team1: { name: "Navy" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:30 PM CST", team1: { name: "Orange" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:35 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:40 PM CST", team1: { name: "Coral" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:45 PM CST", team1: { name: "Indigo" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 12, date: "2025-06-01", time: "6:50 PM CST", team1: { name: "Tan" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:00 PM CST", team1: { name: "Teal" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:10 PM CST", team1: { name: "Cyan" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:15 PM CST", team1: { name: "Crimson" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:20 PM CST", team1: { name: "Cerulean" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:25 PM CST", team1: { name: "Diamond" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:30 PM CST", team1: { name: "Emerald" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:35 PM CST", team1: { name: "Blue" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:40 PM CST", team1: { name: "Red" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:45 PM CST", team1: { name: "Arctic" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 13, date: "2025-06-08", time: "6:50 PM CST", team1: { name: "Purple" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:00 PM CST", team1: { name: "Navy" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:10 PM CST", team1: { name: "Coral" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:15 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:20 PM CST", team1: { name: "Tan" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:25 PM CST", team1: { name: "Olive" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:30 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:35 PM CST", team1: { name: "Orange" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:40 PM CST", team1: { name: "Indigo" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:45 PM CST", team1: { name: "Emerald" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 14, date: "2025-06-15", time: "6:50 PM CST", team1: { name: "Yellow" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:00 PM CST", team1: { name: "Red" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:10 PM CST", team1: { name: "Green" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:15 PM CST", team1: { name: "Cyan" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:20 PM CST", team1: { name: "Purple" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:25 PM CST", team1: { name: "Blue" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:30 PM CST", team1: { name: "Diamond" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:35 PM CST", team1: { name: "Teal" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:40 PM CST", team1: { name: "Crimson" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:45 PM CST", team1: { name: "Arctic" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 15, date: "2025-06-22", time: "6:50 PM CST", team1: { name: "Cerulean" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:00 PM CST", team1: { name: "Tan" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:10 PM CST", team1: { name: "Indigo" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:15 PM CST", team1: { name: "Navy" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:20 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:25 PM CST", team1: { name: "Coral" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:30 PM CST", team1: { name: "Emerald" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:35 PM CST", team1: { name: "Orange" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:40 PM CST", team1: { name: "Olive" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:45 PM CST", team1: { name: "Blue" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 16, date: "2025-06-29", time: "6:50 PM CST", team1: { name: "Yellow" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:00 PM CST", team1: { name: "Diamond" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:10 PM CST", team1: { name: "Cyan" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:15 PM CST", team1: { name: "Cerulean" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:20 PM CST", team1: { name: "Red" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:25 PM CST", team1: { name: "Teal" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:30 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:35 PM CST", team1: { name: "Green" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:40 PM CST", team1: { name: "Purple" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:45 PM CST", team1: { name: "Crimson" }, team2: { name: "Emerald" }, venue: "YouTube" }, { week: 17, date: "2025-07-06", time: "6:50 PM CST", team1: { name: "Arctic" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:00 PM CST", team1: { name: "Arctic" }, team2: { name: "Purple" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:10 PM CST", team1: { name: "Orange" }, team2: { name: "Cerulean" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:15 PM CST", team1: { name: "Blue" }, team2: { name: "Crimson" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:20 PM CST", team1: { name: "Indigo" }, team2: { name: "Green" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:25 PM CST", team1: { name: "Emerald" }, team2: { name: "Red" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:30 PM CST", team1: { name: "Coral" }, team2: { name: "Cyan" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:35 PM CST", team1: { name: "Yellow" }, team2: { name: "Teal" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:40 PM CST", team1: { name: "Hot Pink" }, team2: { name: "Diamond" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:45 PM CST", team1: { name: "Tan" }, team2: { name: "Navy" }, venue: "YouTube" }, { week: 18, date: "2025-07-13", time: "6:50 PM CST", team1: { name: "Olive" }, team2: { name: "Goldenrod" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:00 PM CST", team1: { name: "Green" }, team2: { name: "Hot Pink" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:10 PM CST", team1: { name: "Navy" }, team2: { name: "Olive" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:15 PM CST", team1: { name: "Purple" }, team2: { name: "Tan" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:20 PM CST", team1: { name: "Teal" }, team2: { name: "Orange" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:25 PM CST", team1: { name: "Cyan" }, team2: { name: "Yellow" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:30 PM CST", team1: { name: "Goldenrod" }, team2: { name: "Indigo" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:35 PM CST", team1: { name: "Diamond" }, team2: { name: "Coral" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:40 PM CST", team1: { name: "Red" }, team2: { name: "Blue" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:45 PM CST", team1: { name: "Crimson" }, team2: { name: "Arctic" }, venue: "YouTube" }, { week: 19, date: "2025-07-20", time: "6:50 PM CST", team1: { name: "Cerulean" }, team2: { name: "Emerald" }, venue: "YouTube" }]
  const [selectedSeason, setSelectedSeason] = useState([season3]);
  const [isContentTransitioning, setIsContentTransitioning] = useState(false);
  const handleSeasonChange = (newSeason: string) => {
    setIsContentTransitioning(true);
    setTimeout(() => {
      setSelectedSeason([newSeason]);
      setShowSeasonDropdown(false);
      setIsContentTransitioning(false);
    }, 300);
  };
  // Define the type for a square object
  interface Square {
    id: number;
    color: string;
    name: string;
    wins: number;
    losses: number;
    draws: number;
    power_ups: number;
    damage_done: number;
    wall_bounces: number;
    image: string;
  }

  interface Champion {
    name: string,
    color: string,
    record: string,
    damageDone: string,
    powerUps: string,
    wallBounces: string,
    image: string,
  }

  interface Mvp {
    name: string,
    color: string,
    record: string,
    damageDone: string,
    powerUps: string,
    wallBounces: string,
    image: string,
  }

  interface Rookie {
    name: string,
    color: string,
    record: string,
    damageDone: string,
    powerUps: string,
    wallBounces: string,
    image: string,
  }

  interface AllSquare {
    name: string,
    color: string,
    record: string,
    image: string
  }

  interface MostAggressive {
    name: string,
    color: string,
    damageDone: string,
    damageDonePerGame: string,
    image: string
  }
  interface MostTactical {
    name: string,
    color: string,
    powerUps: string,
    powerUpsPerGame: string,
    image: string
  }
  interface MostNimble {
    name: string,
    color: string,
    wallBounces: string,
    wallBouncesPerGame: string,
    image: string
  }

  interface GameHigh {
    category: string
    square: string,
    value: string,
    week: string
  }
  // Define the type for season data
  interface SeasonData {
    [key: string]: {
      squares: Square[];
    };
  }

  interface AwardsData {
    [key: string]: {
      champion: Champion,
      mvp: Mvp,
      rookie: Rookie,
      allSquareTeam: AllSquare[],
      mostAggressive: MostAggressive,
      mostTactical: MostTactical,
      mostNimble: MostNimble,
      singleGameHighs: GameHigh[];
    };
  }


  const awardsData: AwardsData = {
    [season1]: {
      champion: {
        name: "Yellow",
        color: "yellow",
        record: "5-2",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500"
      },
      mvp: {
        name: "Not Awarded",
        color: "none",
        record: "0-0-0",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: noImage
      },
      rookie: {
        name: "Not Awarded",
        color: "none",
        record: "0-0-0",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: noImage
      },
      allSquareTeam: [
        {
          name: "Not Awarded",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Not Awarded",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Not Awarded",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Not Awarded",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
      ],
      mostAggressive: {
        name: "Not Awarded",
        color: "none",
        damageDone: "0",
        damageDonePerGame: "0",
        image: noImage
      },
      mostTactical: {
        name: "Not Awarded",
        color: "none",
        powerUps: "0",
        powerUpsPerGame: "0",
        image: noImage
      },
      mostNimble: {
        name: "Not Awarded",
        color: "none",
        wallBounces: "0",
        wallBouncesPerGame: "0",
        image: noImage
      },
      singleGameHighs: [
        {
          category: "Most Damage Done",
          square: "None",
          value: "0",
          week: "Week #0",
        },
        {
          category: "Most Power Ups",
          square: "None",
          value: "0",
          week: "Week #0",
        },
        {
          category: "Most Wall Bounces",
          square: "None",
          value: "0",
          week: "Week #0",
        }
      ],
    },
    [season2]: {
      champion: {
        name: "Green",
        color: "green",
        record: "8-7",
        damageDone: "39.33",
        powerUps: "25.2",
        wallBounces: "155.13",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500"
      },
      mvp: {
        name: "Yellow",
        color: "yellow",
        record: "10-5-0",
        damageDone: "39.33",
        powerUps: "25.53",
        wallBounces: "129.33",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500"
      },
      rookie: {
        name: "Crimson",
        color: "crimson",
        record: "11-3-1",
        damageDone: "38",
        powerUps: "23.2",
        wallBounces: "127.2",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vQo89c923T011Exxd5CZTXxX09kwRgd9TwTJG_8FsRv6FwVUIsrD-ezVywX6mjHtQAFA7VNPOniXKym/pub?w=1500&h=1500"
      },
      allSquareTeam: [
        {
          name: "Yellow",
          color: "yellow",
          record: "10-5",
          image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500"
        },
        {
          name: "Green",
          color: "green",
          record: "8-7",
          image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500"
        },
        {
          name: "Arctic",
          color: "arctic",
          record: "9-6",
          image: "https://docs.google.com/drawings/d/e/2PACX-1vTyYJ8Hg0GP4PbaTlJJY6dvmjclMrEX9G3EFgctOHOwO_pYHobBpRfrAoNOQs9wf3NRwcHe_1C0_qqO/pub?w=1500&h=1500"
        },
        {
          name: "Crimson",
          color: "crimson",
          record: "11-3-1",
          image: "https://docs.google.com/drawings/d/e/2PACX-1vQo89c923T011Exxd5CZTXxX09kwRgd9TwTJG_8FsRv6FwVUIsrD-ezVywX6mjHtQAFA7VNPOniXKym/pub?w=1500&h=1500"
        },
      ],
      mostAggressive: {
        name: "Arctic",
        color: "arctic",
        damageDone: "593",
        damageDonePerGame: "39.53",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vTyYJ8Hg0GP4PbaTlJJY6dvmjclMrEX9G3EFgctOHOwO_pYHobBpRfrAoNOQs9wf3NRwcHe_1C0_qqO/pub?w=1500&h=1500"
      },
      mostTactical: {
        name: "Yellow",
        color: "yellow",
        powerUps: "383",
        powerUpsPerGame: "25.53",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500"
      },
      mostNimble: {
        name: "Green",
        color: "green",
        wallBounces: "2327",
        wallBouncesPerGame: "155.13",
        image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500"
      },
      singleGameHighs: [
        {
          category: "Most Damage Done",
          square: "Goldenrod",
          value: "63",
          week: "Week #4",
        },
        {
          category: "Most Power Ups",
          square: "White",
          value: "79",
          week: "Week #9",
        },
        {
          category: "Most Wall Bounces",
          square: "Green",
          value: "683",
          week: "Week #10",
        }
      ],
    },
    [season3]: {
      champion: {
        name: "Pending",
        color: "none",
        record: "0-0",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: noImage
      },
      mvp: {
        name: "Pending",
        color: "none",
        record: "0-0-0",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: noImage
      },
      rookie: {
        name: "Pending",
        color: "none",
        record: "0-0-0",
        damageDone: "0",
        powerUps: "0",
        wallBounces: "0",
        image: noImage
      },
      allSquareTeam: [
        {
          name: "Pending",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Pending",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Pending",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
        {
          name: "Pending",
          color: "none",
          record: "0-0-0",
          image: noImage
        },
      ],
      mostAggressive: {
        name: "Pending",
        color: "none",
        damageDone: "0",
        damageDonePerGame: "0",
        image: noImage
      },
      mostTactical: {
        name: "Pending",
        color: "none",
        powerUps: "0",
        powerUpsPerGame: "0",
        image: noImage
      },
      mostNimble: {
        name: "Pending",
        color: "none",
        wallBounces: "0",
        wallBouncesPerGame: "0",
        image: noImage
      },
      singleGameHighs: [
        {
          category: "Most Damage Done",
          square: "Pending",
          value: "0",
          week: "Week #0",
        },
        {
          category: "Most Power Ups",
          square: "Pending",
          value: "0",
          week: "Week #0",
        },
        {
          category: "Most Wall Bounces",
          square: "Pending",
          value: "0",
          week: "Week #0",
        }
      ],
    }
  };

  const [selectedColor, setSelectedColor] = useState("all");
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const seasonData: SeasonData = {
    [season1]: {
      squares: [
        { id: 1, color: "red", name: "Red", wins: 3, losses: 4, draws: 0, power_ups: 36, damage_done: 329, wall_bounces: 135, image: "https://docs.google.com/drawings/d/e/2PACX-1vTc2C286DHcGfC_czwyyZlEX-oWNFd7fDhc2LrbTrEyQgHYhK-MfNT821xsGg69h9MB2lSEiplNyKzr/pub?w=1500&h=1500" },
        { id: 2, color: "blue", name: "Blue", wins: 3, losses: 4, draws: 0, power_ups: 35, damage_done: 350, wall_bounces: 132, image: "https://docs.google.com/drawings/d/e/2PACX-1vSsaPN03rGs7PGXG9xTw-2f8pZ244MIRSTQraWvHPvQYlymKBDiyVeYS1HCDiSRgfma2pTqY-ZZrjnn/pub?w=1500&h=1500" },
        { id: 3, color: "green", name: "Green", wins: 5, losses: 2, draws: 0, power_ups: 38, damage_done: 329, wall_bounces: 131, image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500" },
        { id: 4, color: "yellow", name: "Yellow", wins: 5, losses: 2, draws: 0, power_ups: 37, damage_done: 337, wall_bounces: 134, image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500" },
        { id: 5, color: "orange", name: "Orange", wins: 1, losses: 6, draws: 0, power_ups: 26, damage_done: 336, wall_bounces: 126, image: "https://docs.google.com/drawings/d/e/2PACX-1vT5u4pAKWj6yg0XmzqHLlL1vRibnYNYolMZwZk8a6bKQOXU0UAgCiSvkK23St_60VkGu01oAhMlSMNT/pub?w=1500&h=1500" },
        { id: 6, color: "cyan", name: "Cyan", wins: 3, losses: 4, draws: 0, power_ups: 44, damage_done: 314, wall_bounces: 132, image: "https://docs.google.com/drawings/d/e/2PACX-1vS68NgAs3PWllP4Py9vS_Y0ANxvtvpkp3iIzBkgKLegtzei_NTMU_VIaB5G60qADiDiulqJbaU2l6AY/pub?w=1500&h=1500" },
        { id: 7, color: "purple", name: "Purple", wins: 3, losses: 4, draws: 0, power_ups: 46, damage_done: 358, wall_bounces: 133, image: "https://docs.google.com/drawings/d/e/2PACX-1vRyYszxA7ij21DNmKRGIvyvBWxJ68V8_B0LAFiLszo6NyaRWdfYggCrbMDrwoJrFI0qEBn4jKvIKidN/pub?w=1500&h=1500" },
        { id: 8, color: "hot_pink", name: "Hot Pink", wins: 6, losses: 1, draws: 0, power_ups: 51, damage_done: 335, wall_bounces: 134, image: "https://docs.google.com/drawings/d/e/2PACX-1vRjCF0SICdWi0Z4hf54U6M19P-5t7BTlCDQwQXYVeE79rH1yumBW0UiP3bL8qMuPppxZ84iUwlHqQsA/pub?w=1500&h=1500" }
      ],
    },
    [season2]: {
      squares: [
        { id: 1, color: "red", name: "Red", wins: 9, losses: 6, draws: 0, power_ups: 310, damage_done: 550, wall_bounces: 1522, image: "https://docs.google.com/drawings/d/e/2PACX-1vTc2C286DHcGfC_czwyyZlEX-oWNFd7fDhc2LrbTrEyQgHYhK-MfNT821xsGg69h9MB2lSEiplNyKzr/pub?w=1500&h=1500" },
        { id: 2, color: "blue", name: "Blue", wins: 9, losses: 6, draws: 0, power_ups: 349, damage_done: 573, wall_bounces: 1681, image: "https://docs.google.com/drawings/d/e/2PACX-1vSsaPN03rGs7PGXG9xTw-2f8pZ244MIRSTQraWvHPvQYlymKBDiyVeYS1HCDiSRgfma2pTqY-ZZrjnn/pub?w=1500&h=1500" },
        { id: 3, color: "green", name: "Green", wins: 8, losses: 7, draws: 0, power_ups: 378, damage_done: 590, wall_bounces: 2327, image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500" },
        { id: 4, color: "yellow", name: "Yellow", wins: 10, losses: 5, draws: 0, power_ups: 383, damage_done: 590, wall_bounces: 1940, image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500" },
        { id: 5, color: "purple", name: "Purple", wins: 7, losses: 7, draws: 1, power_ups: 331, damage_done: 554, wall_bounces: 1646, image: "https://docs.google.com/drawings/d/e/2PACX-1vRyYszxA7ij21DNmKRGIvyvBWxJ68V8_B0LAFiLszo6NyaRWdfYggCrbMDrwoJrFI0qEBn4jKvIKidN/pub?w=1500&h=1500" },
        { id: 6, color: "hot_pink", name: "Hot Pink", wins: 6, losses: 8, draws: 1, power_ups: 309, damage_done: 560, wall_bounces: 1632, image: "https://docs.google.com/drawings/d/e/2PACX-1vRjCF0SICdWi0Z4hf54U6M19P-5t7BTlCDQwQXYVeE79rH1yumBW0UiP3bL8qMuPppxZ84iUwlHqQsA/pub?w=1500&h=1500" },
        { id: 7, color: "cyan", name: "Cyan", wins: 3, losses: 12, draws: 0, power_ups: 329, damage_done: 545, wall_bounces: 1791, image: "https://docs.google.com/drawings/d/e/2PACX-1vS68NgAs3PWllP4Py9vS_Y0ANxvtvpkp3iIzBkgKLegtzei_NTMU_VIaB5G60qADiDiulqJbaU2l6AY/pub?w=1500&h=1500" },
        { id: 8, color: "orange", name: "Orange", wins: 8, losses: 7, draws: 0, power_ups: 349, damage_done: 577, wall_bounces: 1879, image: "https://docs.google.com/drawings/d/e/2PACX-1vT5u4pAKWj6yg0XmzqHLlL1vRibnYNYolMZwZk8a6bKQOXU0UAgCiSvkK23St_60VkGu01oAhMlSMNT/pub?w=1500&h=1500" },
        { id: 9, color: "arctic", name: "Arctic", wins: 9, losses: 6, draws: 0, power_ups: 359, damage_done: 593, wall_bounces: 1602, image: "https://docs.google.com/drawings/d/e/2PACX-1vTyYJ8Hg0GP4PbaTlJJY6dvmjclMrEX9G3EFgctOHOwO_pYHobBpRfrAoNOQs9wf3NRwcHe_1C0_qqO/pub?w=1500&h=1500" },
        { id: 10, color: "crimson", name: "Crimson", wins: 11, losses: 3, draws: 1, power_ups: 348, damage_done: 570, wall_bounces: 1908, image: "https://docs.google.com/drawings/d/e/2PACX-1vQo89c923T011Exxd5CZTXxX09kwRgd9TwTJG_8FsRv6FwVUIsrD-ezVywX6mjHtQAFA7VNPOniXKym/pub?w=1500&h=1500" },
        { id: 11, color: "cerulean", name: "Cerulean", wins: 6, losses: 8, draws: 1, power_ups: 306, damage_done: 548, wall_bounces: 1868, image: "https://docs.google.com/drawings/d/e/2PACX-1vRAkxvHOfwQzadYbbhXZTS17_fau8ibD4DBZR6MtEjcMvw8sbTGpnl3uZWb864HHpV0MIyruXVx1Y4l/pub?w=1500&h=1500" },
        { id: 12, color: "emerald", name: "Emerald", wins: 3, losses: 11, draws: 1, power_ups: 292, damage_done: 559, wall_bounces: 1579, image: "https://docs.google.com/drawings/d/e/2PACX-1vRbLwinQ8ahVv3OGlXzrEkdMbaIDZf_eLltw8YpEq3yHm0HpJR6uxm4KyINR0cV8dQDXdxs2EcWfdK2/pub?w=1500&h=1500" },
        { id: 13, color: "goldenrod", name: "Goldenrod", wins: 7, losses: 8, draws: 0, power_ups: 320, damage_done: 580, wall_bounces: 1761, image: "https://docs.google.com/drawings/d/e/2PACX-1vTHsaByxlGzycaF8E1vCkoTBUjpg9S0z_c94UTLx5crz6BBOryMVJWMFJqeyDhhNIL9rBZhVwXmZXrc/pub?w=1500&h=1500" },
        { id: 14, color: "white", name: "White", wins: 5, losses: 8, draws: 2, power_ups: 358, damage_done: 577, wall_bounces: 1841, image: "https://docs.google.com/drawings/d/e/2PACX-1vQ5anRcOUSdIvO6yiDBvle67nELyNB-Zbj14AxwxgxhTzGFC5Pt4EOF2sl7kDf5blRyzZgLFmyCmLHh/pub?w=1500&h=1500" },
        { id: 15, color: "coral", name: "Coral", wins: 9, losses: 6, draws: 0, power_ups: 339, damage_done: 582, wall_bounces: 1555, image: "https://docs.google.com/drawings/d/e/2PACX-1vQbducBA_Enj_BCwFoMJ2e8Ww5xjphDDcdvn1aiORFS_gHqN7GR6dLRu2s_cg4Ni7a3cpyE742COvCI/pub?w=1500&h=1500" },
        { id: 16, color: "olive", name: "Olive", wins: 6, losses: 8, draws: 1, power_ups: 361, damage_done: 553, wall_bounces: 1848, image: "https://docs.google.com/drawings/d/e/2PACX-1vRCGsClW8b5VReXMmoMkYbInPAhhTLDa3FZ8XVtVMj5gPWVB88--lbIHqLjEnkdn44tC-ME5D5H3DtN/pub?w=1500&h=1500" }
      ],
    },
    [season3]: {
      squares: [
        { id: 1, color: "red", name: "Red", wins: 2, losses: 0, draws: 0, power_ups: 18, damage_done: 85, wall_bounces: 219, image: "https://docs.google.com/drawings/d/e/2PACX-1vTc2C286DHcGfC_czwyyZlEX-oWNFd7fDhc2LrbTrEyQgHYhK-MfNT821xsGg69h9MB2lSEiplNyKzr/pub?w=1500&h=1500" },
        { id: 2, color: "blue", name: "Blue", wins: 0, losses: 2, draws: 0, power_ups: 18, damage_done: 77, wall_bounces: 209, image: "https://docs.google.com/drawings/d/e/2PACX-1vSsaPN03rGs7PGXG9xTw-2f8pZ244MIRSTQraWvHPvQYlymKBDiyVeYS1HCDiSRgfma2pTqY-ZZrjnn/pub?w=1500&h=1500" },
        { id: 3, color: "green", name: "Green", wins: 0, losses: 2, draws: 0, power_ups: 20, damage_done: 75, wall_bounces: 201, image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500" },
        { id: 4, color: "yellow", name: "Yellow", wins: 2, losses: 0, draws: 0, power_ups: 23, damage_done: 82, wall_bounces: 182, image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500" },
        { id: 5, color: "purple", name: "Purple", wins: 1, losses: 1, draws: 0, power_ups: 34, damage_done: 85, wall_bounces: 224, image: "https://docs.google.com/drawings/d/e/2PACX-1vRyYszxA7ij21DNmKRGIvyvBWxJ68V8_B0LAFiLszo6NyaRWdfYggCrbMDrwoJrFI0qEBn4jKvIKidN/pub?w=1500&h=1500" },
        { id: 6, color: "hot_pink", name: "Hot Pink", wins: 2, losses: 0, draws: 0, power_ups: 28, damage_done: 77, wall_bounces: 199, image: "https://docs.google.com/drawings/d/e/2PACX-1vRjCF0SICdWi0Z4hf54U6M19P-5t7BTlCDQwQXYVeE79rH1yumBW0UiP3bL8qMuPppxZ84iUwlHqQsA/pub?w=1500&h=1500" },
        { id: 7, color: "cyan", name: "Cyan", wins: 1, losses: 1, draws: 0, power_ups: 36, damage_done: 75, wall_bounces: 229, image: "https://docs.google.com/drawings/d/e/2PACX-1vS68NgAs3PWllP4Py9vS_Y0ANxvtvpkp3iIzBkgKLegtzei_NTMU_VIaB5G60qADiDiulqJbaU2l6AY/pub?w=1500&h=1500" },
        { id: 8, color: "orange", name: "Orange", wins: 1, losses: 1, draws: 0, power_ups: 26, damage_done: 80, wall_bounces: 242, image: "https://docs.google.com/drawings/d/e/2PACX-1vT5u4pAKWj6yg0XmzqHLlL1vRibnYNYolMZwZk8a6bKQOXU0UAgCiSvkK23St_60VkGu01oAhMlSMNT/pub?w=1500&h=1500" },
        { id: 9, color: "arctic", name: "Arctic", wins: 0, losses: 2, draws: 0, power_ups: 15, damage_done: 78, wall_bounces: 204, image: "https://docs.google.com/drawings/d/e/2PACX-1vTyYJ8Hg0GP4PbaTlJJY6dvmjclMrEX9G3EFgctOHOwO_pYHobBpRfrAoNOQs9wf3NRwcHe_1C0_qqO/pub?w=1500&h=1500" },
        { id: 10, color: "crimson", name: "Crimson", wins: 1, losses: 1, draws: 0, power_ups: 27, damage_done: 79, wall_bounces: 230, image: "https://docs.google.com/drawings/d/e/2PACX-1vQo89c923T011Exxd5CZTXxX09kwRgd9TwTJG_8FsRv6FwVUIsrD-ezVywX6mjHtQAFA7VNPOniXKym/pub?w=1500&h=1500" },
        { id: 11, color: "cerulean", name: "Cerulean", wins: 2, losses: 0, draws: 0, power_ups: 24, damage_done: 83, wall_bounces: 204, image: "https://docs.google.com/drawings/d/e/2PACX-1vRAkxvHOfwQzadYbbhXZTS17_fau8ibD4DBZR6MtEjcMvw8sbTGpnl3uZWb864HHpV0MIyruXVx1Y4l/pub?w=1500&h=1500" },
        { id: 12, color: "emerald", name: "Emerald", wins: 1, losses: 1, draws: 0, power_ups: 25, damage_done: 79, wall_bounces: 227, image: "https://docs.google.com/drawings/d/e/2PACX-1vRbLwinQ8ahVv3OGlXzrEkdMbaIDZf_eLltw8YpEq3yHm0HpJR6uxm4KyINR0cV8dQDXdxs2EcWfdK2/pub?w=1500&h=1500" },
        { id: 13, color: "goldenrod", name: "Goldenrod", wins: 1, losses: 1, draws: 0, power_ups: 20, damage_done: 81, wall_bounces: 177, image: "https://docs.google.com/drawings/d/e/2PACX-1vTHsaByxlGzycaF8E1vCkoTBUjpg9S0z_c94UTLx5crz6BBOryMVJWMFJqeyDhhNIL9rBZhVwXmZXrc/pub?w=1500&h=1500" },
        { id: 14, color: "diamond", name: "Diamond", wins: 0, losses: 2, draws: 0, power_ups: 28, damage_done: 83, wall_bounces: 209, image: "https://docs.google.com/drawings/d/e/2PACX-1vTwIEKDfpQJqOzx562jQRB1VHpHkcJKoTdodLni9ktC4cbJw11LcgjwsymNy49METDwq6R2WC3HBBrs/pub?w=1500&h=1500" },
        { id: 15, color: "coral", name: "Coral", wins: 1, losses: 1, draws: 0, power_ups: 27, damage_done: 81, wall_bounces: 222, image: "https://docs.google.com/drawings/d/e/2PACX-1vQbducBA_Enj_BCwFoMJ2e8Ww5xjphDDcdvn1aiORFS_gHqN7GR6dLRu2s_cg4Ni7a3cpyE742COvCI/pub?w=1500&h=1500" },
        { id: 16, color: "olive", name: "Olive", wins: 2, losses: 0, draws: 0, power_ups: 20, damage_done: 79, wall_bounces: 213, image: "https://docs.google.com/drawings/d/e/2PACX-1vRCGsClW8b5VReXMmoMkYbInPAhhTLDa3FZ8XVtVMj5gPWVB88--lbIHqLjEnkdn44tC-ME5D5H3DtN/pub?w=1500&h=1500" },
        { id: 17, color: "navy", name: "Navy", wins: 0, losses: 2, draws: 0, power_ups: 23, damage_done: 77, wall_bounces: 223, image: "https://docs.google.com/drawings/d/e/2PACX-1vQgfmkSvE4l86IUnoTlw74lqOJHAMQFCNB3aUvSrv9aQEgRJJHFSnVOVyEhK9FImPgwyjSrP3isEeyq/pub?w=1500&h=1500" },
        { id: 18, color: "teal", name: "Teal", wins: 2, losses: 0, draws: 0, power_ups: 22, damage_done: 77, wall_bounces: 236, image: "https://docs.google.com/drawings/d/e/2PACX-1vSxyKt3BBFxgp2rO9JoCyywMO3ZjHBGreXk4aLjjgZwEtsjfBSuhhBD31Ctx7_FWYK-3Go4IwHcPLho/pub?w=1500&h=1500" },
        { id: 19, color: "indigo", name: "Indigo", wins: 1, losses: 1, draws: 0, power_ups: 27, damage_done: 79, wall_bounces: 205, image: "https://docs.google.com/drawings/d/e/2PACX-1vSVQ47ut4IDgMSXXw0y3GZ02If5JwZJSDn_AbU3fC5756E5RBoHjSqDsCv8RPT5Tnu7WLPeNk6lq1rZ/pub?w=1500&h=1500" },
        { id: 20, color: "tan", name: "Tan", wins: 0, losses: 2, draws: 0, power_ups: 27, damage_done: 81, wall_bounces: 210, image: "https://docs.google.com/drawings/d/e/2PACX-1vS3F3SuNL4lWFNZEk26R1JCGncX8n3OHBSNSqHFWOaqHlQR5ZoBkDghSDDxZ6nw1bevyQsMIs6Oupso/pub?w=1500&h=1500" }
      ]
    }
  };
  const [selectedWeekNumber, setSelectedWeekNumber] = useState(3);
  const [showWeekDropdown, setShowWeekDropdown] = useState(false);
  const [showSquareProfile, setShowSquareProfile] = useState(false);
  const seasons = [season1, season2, season3];
  const colors = ["all", "red", "blue", "green", "yellow", "purple"];
  const squares = [
    { id: 1, color: "red", name: "Red", wins: 9, losses: 6, draws: 0, power_ups: 310, damage_done: 550, wall_bounces: 1522, image: "https://docs.google.com/drawings/d/e/2PACX-1vTc2C286DHcGfC_czwyyZlEX-oWNFd7fDhc2LrbTrEyQgHYhK-MfNT821xsGg69h9MB2lSEiplNyKzr/pub?w=1500&h=1500" },
    { id: 2, color: "blue", name: "Blue", wins: 9, losses: 6, draws: 0, power_ups: 349, damage_done: 573, wall_bounces: 1681, image: "https://docs.google.com/drawings/d/e/2PACX-1vSsaPN03rGs7PGXG9xTw-2f8pZ244MIRSTQraWvHPvQYlymKBDiyVeYS1HCDiSRgfma2pTqY-ZZrjnn/pub?w=1500&h=1500" },
    { id: 3, color: "green", name: "Green", wins: 8, losses: 7, draws: 0, power_ups: 378, damage_done: 590, wall_bounces: 2327, image: "https://docs.google.com/drawings/d/e/2PACX-1vRBDNIxSyjWmPTeqDWfYJt2vgg3lMIzlI1NwRWHYhv0kRdOAYToxthvUxBTNtTutO4pwrbHe3uPxE9-/pub?w=1500&h=1500" },
    { id: 4, color: "yellow", name: "Yellow", wins: 10, losses: 5, draws: 0, power_ups: 383, damage_done: 590, wall_bounces: 1940, image: "https://docs.google.com/drawings/d/e/2PACX-1vREnIoNxanMIqNNa97QvURbVm6lesZVxvq-awFhaZb0q608Yon95qTM8BHHReB8hryih7kVEx-i4kTj/pub?w=1500&h=1500" },
    { id: 5, color: "purple", name: "Purple", wins: 7, losses: 7, draws: 1, power_ups: 331, damage_done: 554, wall_bounces: 1646, image: "https://docs.google.com/drawings/d/e/2PACX-1vRyYszxA7ij21DNmKRGIvyvBWxJ68V8_B0LAFiLszo6NyaRWdfYggCrbMDrwoJrFI0qEBn4jKvIKidN/pub?w=1500&h=1500" },
    { id: 6, color: "hot_pink", name: "Hot Pink", wins: 6, losses: 8, draws: 1, power_ups: 309, damage_done: 560, wall_bounces: 1632, image: "https://docs.google.com/drawings/d/e/2PACX-1vRjCF0SICdWi0Z4hf54U6M19P-5t7BTlCDQwQXYVeE79rH1yumBW0UiP3bL8qMuPppxZ84iUwlHqQsA/pub?w=1500&h=1500" },
    { id: 7, color: "cyan", name: "Cyan", wins: 3, losses: 12, draws: 0, power_ups: 329, damage_done: 545, wall_bounces: 1791, image: "https://docs.google.com/drawings/d/e/2PACX-1vS68NgAs3PWllP4Py9vS_Y0ANxvtvpkp3iIzBkgKLegtzei_NTMU_VIaB5G60qADiDiulqJbaU2l6AY/pub?w=1500&h=1500" },
    { id: 8, color: "orange", name: "Orange", wins: 8, losses: 7, draws: 0, power_ups: 349, damage_done: 577, wall_bounces: 1879, image: "https://docs.google.com/drawings/d/e/2PACX-1vT5u4pAKWj6yg0XmzqHLlL1vRibnYNYolMZwZk8a6bKQOXU0UAgCiSvkK23St_60VkGu01oAhMlSMNT/pub?w=1500&h=1500" },
    { id: 9, color: "arctic", name: "Arctic", wins: 9, losses: 6, draws: 0, power_ups: 359, damage_done: 593, wall_bounces: 1602, image: "https://docs.google.com/drawings/d/e/2PACX-1vTyYJ8Hg0GP4PbaTlJJY6dvmjclMrEX9G3EFgctOHOwO_pYHobBpRfrAoNOQs9wf3NRwcHe_1C0_qqO/pub?w=1500&h=1500" },
    { id: 10, color: "crimson", name: "Crimson", wins: 11, losses: 3, draws: 1, power_ups: 348, damage_done: 570, wall_bounces: 1908, image: "https://docs.google.com/drawings/d/e/2PACX-1vQo89c923T011Exxd5CZTXxX09kwRgd9TwTJG_8FsRv6FwVUIsrD-ezVywX6mjHtQAFA7VNPOniXKym/pub?w=1500&h=1500" },
    { id: 11, color: "cerulean", name: "Cerulean", wins: 6, losses: 8, draws: 1, power_ups: 306, damage_done: 548, wall_bounces: 1868, image: "https://docs.google.com/drawings/d/e/2PACX-1vRAkxvHOfwQzadYbbhXZTS17_fau8ibD4DBZR6MtEjcMvw8sbTGpnl3uZWb864HHpV0MIyruXVx1Y4l/pub?w=1500&h=1500" },
    { id: 12, color: "emerald", name: "Emerald", wins: 3, losses: 11, draws: 1, power_ups: 292, damage_done: 559, wall_bounces: 1579, image: "https://docs.google.com/drawings/d/e/2PACX-1vRbLwinQ8ahVv3OGlXzrEkdMbaIDZf_eLltw8YpEq3yHm0HpJR6uxm4KyINR0cV8dQDXdxs2EcWfdK2/pub?w=1500&h=1500" },
    { id: 13, color: "goldenrod", name: "Goldenrod", wins: 7, losses: 8, draws: 0, power_ups: 320, damage_done: 580, wall_bounces: 1761, image: "https://docs.google.com/drawings/d/e/2PACX-1vTHsaByxlGzycaF8E1vCkoTBUjpg9S0z_c94UTLx5crz6BBOryMVJWMFJqeyDhhNIL9rBZhVwXmZXrc/pub?w=1500&h=1500" },
    { id: 14, color: "white", name: "White", wins: 5, losses: 8, draws: 2, power_ups: 358, damage_done: 577, wall_bounces: 1841, image: "https://docs.google.com/drawings/d/e/2PACX-1vQ5anRcOUSdIvO6yiDBvle67nELyNB-Zbj14AxwxgxhTzGFC5Pt4EOF2sl7kDf5blRyzZgLFmyCmLHh/pub?w=1500&h=1500" },
    { id: 15, color: "coral", name: "Coral", wins: 9, losses: 6, draws: 0, power_ups: 339, damage_done: 582, wall_bounces: 1555, image: "https://docs.google.com/drawings/d/e/2PACX-1vQbducBA_Enj_BCwFoMJ2e8Ww5xjphDDcdvn1aiORFS_gHqN7GR6dLRu2s_cg4Ni7a3cpyE742COvCI/pub?w=1500&h=1500" },
    { id: 16, color: "olive", name: "Olive", wins: 6, losses: 8, draws: 1, power_ups: 361, damage_done: 553, wall_bounces: 1848, image: "https://docs.google.com/drawings/d/e/2PACX-1vRCGsClW8b5VReXMmoMkYbInPAhhTLDa3FZ8XVtVMj5gPWVB88--lbIHqLjEnkdn44tC-ME5D5H3DtN/pub?w=1500&h=1500" },
    { id: 17, color: "navy", name: "Navy", wins: 0, losses: 2, draws: 0, power_ups: 23, damage_done: 77, wall_bounces: 223, image: "https://docs.google.com/drawings/d/e/2PACX-1vQgfmkSvE4l86IUnoTlw74lqOJHAMQFCNB3aUvSrv9aQEgRJJHFSnVOVyEhK9FImPgwyjSrP3isEeyq/pub?w=1500&h=1500" },
    { id: 18, color: "teal", name: "Teal", wins: 2, losses: 0, draws: 0, power_ups: 22, damage_done: 77, wall_bounces: 236, image: "https://docs.google.com/drawings/d/e/2PACX-1vSxyKt3BBFxgp2rO9JoCyywMO3ZjHBGreXk4aLjjgZwEtsjfBSuhhBD31Ctx7_FWYK-3Go4IwHcPLho/pub?w=1500&h=1500" },
    { id: 19, color: "indigo", name: "Indigo", wins: 1, losses: 1, draws: 0, power_ups: 27, damage_done: 79, wall_bounces: 205, image: "https://docs.google.com/drawings/d/e/2PACX-1vSVQ47ut4IDgMSXXw0y3GZ02If5JwZJSDn_AbU3fC5756E5RBoHjSqDsCv8RPT5Tnu7WLPeNk6lq1rZ/pub?w=1500&h=1500" },
    { id: 20, color: "tan", name: "Tan", wins: 0, losses: 2, draws: 0, power_ups: 27, damage_done: 81, wall_bounces: 210, image: "https://docs.google.com/drawings/d/e/2PACX-1vS3F3SuNL4lWFNZEk26R1JCGncX8n3OHBSNSqHFWOaqHlQR5ZoBkDghSDDxZ6nw1bevyQsMIs6Oupso/pub?w=1500&h=1500" },
    { id: 21, color: "diamond", name: "Diamond", wins: 0, losses: 2, draws: 0, power_ups: 28, damage_done: 83, wall_bounces: 209, image: "https://docs.google.com/drawings/d/e/2PACX-1vTwIEKDfpQJqOzx562jQRB1VHpHkcJKoTdodLni9ktC4cbJw11LcgjwsymNy49METDwq6R2WC3HBBrs/pub?w=1500&h=1500" },
  ];
  useEffect(() => {
    // Remove chart initialization
  }, []);
  const renderHeader = () => (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-gray-800">Square League</h1>
          <div className="flex space-x-6">
            {["home", "standings", "schedule", "stats", "awards", "donors"].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`capitalize cursor-pointer whitespace-nowrap ${activePage === page
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                    }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
              className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap transition-all duration-300 ${showSeasonDropdown ? "bg-blue-50 text-blue-600" : "bg-gray-100"
                }`}
            >
              {selectedSeason}
              <i
                className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${showSeasonDropdown ? "rotate-180" : ""
                  }`}
              ></i>
            </button>
            {showSeasonDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 origin-top">
                {seasons.map((season) => (
                  <div
                    key={season}
                    onClick={() => handleSeasonChange(season)}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 ${selectedSeason.includes(season)
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : ""
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{season}</span>
                      {selectedSeason.includes(season) && (
                        <i className="fas fa-check text-blue-600 ml-2"></i>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowColorDropdown(!showColorDropdown)}
              className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer whitespace-nowrap"
            >
              {selectedColor} <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {showColorDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 origin-top">
                {colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setShowColorDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                  >
                    {color}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
  const renderFooter = () => (
    <footer className="bg-gray-800 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p>
              <i className="fas fa-envelope mr-2"></i> bouncingballs247@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <i className="fab fa-twitter text-2xl cursor-pointer"></i>
            <i className="fab fa-facebook text-2xl cursor-pointer"></i>
            <i className="fab fa-instagram text-2xl cursor-pointer"></i>
            <i className="fab fa-youtube text-2xl cursor-pointer"></i>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm">© 2025 Square League. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
  const renderSquareProfile = () => {
    const square = squares.find((s) => s.name === selectedSquare);
    if (!square) return null;
    // Get player stats by season
    const seasonalStats = Object.entries(seasonData)
      .map(([season, data]) => {
        const playerData = data.squares.find((s) => s.name === square.name);
        return {
          season,
          wins: playerData?.wins || 0,
          losses: playerData?.losses || 0,
          draws: playerData?.draws || 0,
          damageDealt: playerData?.damage_done || 0,
          powerUps: playerData?.power_ups || 0,
          wallBounces: playerData?.wall_bounces || 0
        };
      })
      .sort((a, b) => b.season.localeCompare(a.season));
    // Generate random last 5 matches (W, L, D)
    const last5 = Array(5)
      .fill(null)
      .map(() => {
        const rand = Math.random();
        return rand > 0.6 ? "W" : rand > 0.3 ? "L" : "D";
      });
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{square.name}</h2>
            <button
              onClick={() => setShowSquareProfile(false)}
              className="absolute top-3 right-3 bg-white shadow-lg w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-50 transition-colors duration-200"
            >
              <i className="fas fa-times text-xl flex items-center justify-center w-full"></i>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="w-64 h-64 rounded-lg overflow-hidden">
              <img
                src={square.image}
                alt={square.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-semibold mb-4">Season Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Wins:</span>{" "}
                      <span className="font-semibold">{square.wins}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Losses:</span>{" "}
                      <span className="font-semibold">{square.losses}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Draws:</span>{" "}
                      <span className="font-semibold">{square.draws}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Win Rate:</span>{" "}
                      <span className="font-semibold">
                        {(
                          (square.wins / (square.wins + square.losses)) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Damage Done:</span>{" "}
                      <span className="font-semibold text-red-600">
                        {square.damage_done}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Power Ups:</span>{" "}
                      <span className="font-semibold text-blue-600">
                        {square.power_ups}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Wall Bounces:</span>{" "}
                      <span className="font-semibold text-green-600">
                        {square.wall_bounces}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-2">Last 5 Matches:</p>
                <div className="flex space-x-2">
                  {last5.map((result, i) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${result === "W"
                        ? "bg-green-100 text-green-800"
                        : result === "L"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6">
              Career Statistics by Season
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                    <th className="px-6 py-3 text-left font-semibold">
                      Season
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Wins
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Losses
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Draws
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Damage
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Power Ups
                    </th>
                    <th className="px-6 py-3 text-center font-semibold">
                      Wall Bounces
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalStats.map((stats, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">{stats.season}</td>
                      <td className="px-6 py-4 text-center">{stats.wins}</td>
                      <td className="px-6 py-4 text-center">{stats.losses}</td>
                      <td className="px-6 py-4 text-center">{stats.draws}</td>
                      <td className="px-6 py-4 text-center text-red-600">
                        {stats.damageDealt}
                      </td>
                      <td className="px-6 py-4 text-center text-blue-600">
                        {stats.powerUps}
                      </td>
                      <td className="px-6 py-4 text-center text-green-600">
                        {stats.wallBounces}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowSquareProfile(false)}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 !rounded-button whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  const filterSquares = () => {
    const currentSeasonSquares = seasonData[selectedSeason[0]].squares;
    if (selectedColor === "all") return currentSeasonSquares;
    return currentSeasonSquares.filter(
      (square: Square) => square.color === selectedColor,
    );
  };
  const renderDonors = () => {
    const donors = [
      {
        name: "Olive_thesemi_goat",
        amount: 20,
        company: "Tech Innovations Inc.",
        member: false
      },
      {
        name: "Grated Shtick",
        amount: 5,
        tier: "Platinum",
        company: "Global Ventures Ltd.",
        member: false
      },
      {
        name: "urdoom",
        amount: 9.98,
        tier: "Platinum",
        company: "Future Systems",
        member: false
      },
      {
        name: "ThatCyanSquare",
        amount: 0.99,
        tier: "Gold",
        company: "Creative Solutions",
        member: false
      },
      {
        name: "ThatDarn Seel",
        amount: 5,
        tier: "Gold",
        company: "Creative Solutions",
        member: false
      }
    ];

    // Sort donors by amount in descending order
    const sortedDonors = donors.sort((a, b) => b.amount - a.amount);

    return (
      <div className="grid grid-cols-3 gap-8">
        {sortedDonors.map((donor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{donor.name}</h3>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${donor.member
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
                  }`}
              >
                {donor.member ? "Member" : "Non-member"}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-gift text-green-500 mr-2"></i>
                <span className="text-2xl font-bold text-green-600">
                  ${donor.amount}
                </span>
              </div>
              <p className="text-sm text-gray-500">Overall Contribution</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const renderContent = () => {
    switch (activePage) {
      case "stats":
        return (
          <div className="pt-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Player Statistics</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left">Player</th>
                    <th className="px-6 py-4 text-center">Wins</th>
                    <th className="px-6 py-4 text-center">Losses</th>
                    <th className="px-6 py-4 text-center">Draws</th>
                    <th className="px-6 py-4 text-center">Damage Done</th>
                    <th className="px-6 py-4 text-center">Power Ups</th>
                    <th className="px-6 py-4 text-center">Wall Bounces</th>
                  </tr>
                </thead>
                <tbody>
                  {filterSquares().map((square: Square) => (
                    <tr
                      key={square.id}
                      onClick={() => {
                        setSelectedSquare(square.name);
                        setShowSquareProfile(true);
                      }}
                      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{square.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">{square.wins}</td>
                      <td className="px-6 py-4 text-center">{square.losses}</td>
                      <td className="px-6 py-4 text-center">{square.draws}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600 font-medium">
                          {square.damage_done}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-medium">
                          {square.power_ups}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-medium">
                          {square.wall_bounces}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "schedule":
        return (
          <div
            className={`pt-24 px-6 max-w-7xl mx-auto min-h-screen transition-opacity duration-300 ${isContentTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Upcoming Matches</h2>
              <div className="relative">
                <button
                  onClick={() => setShowWeekDropdown(!showWeekDropdown)}
                  className="px-4 py-2 bg-white shadow-sm rounded-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors duration-200 !rounded-button whitespace-nowrap"
                >
                  <span>Week {selectedWeekNumber}</span>
                  <i
                    className={`fas fa-chevron-down ml-2 transition-transform duration-200 ${showWeekDropdown ? "rotate-180" : ""}`}
                  ></i>
                </button>
                {showWeekDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((week) => (
                      <div
                        key={week}
                        onClick={() => {
                          setSelectedWeekNumber(week);
                          setShowWeekDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      >
                        <span>Week {week}</span>
                        {selectedWeekNumber === week && (
                          <i className="fas fa-check text-green-500"></i>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                {testSchedule
                  .filter((match) => match.week === selectedWeekNumber)
                  .map((match, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 flex-1">
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <img
                              src={seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team1.name,
                              )?.image || noImage}
                              alt={match.team1.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-xl font-semibold">
                              {match.team1.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team1.name,
                              )?.wins || 0}
                              -
                              {seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team1.name,
                              )?.losses || 0}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 text-center px-8">
                          <div className="text-2xl font-bold mb-2">VS</div>
                          <div className="text-gray-600">
                            <div className="text-gray-600">
                              {new Date(`${match.date}T12:00:00Z`).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="text-lg font-medium text-gray-800">
                            {match.time}
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 flex-1 justify-end">
                          <div className="text-right">
                            <div className="text-xl font-semibold">
                              {match.team2.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team2.name,
                              )?.wins || 0}
                              -
                              {seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team2.name,
                              )?.losses || 0}
                            </div>
                          </div>
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <img
                              src={seasonData[selectedSeason[0]].squares.find(
                                (s) => s.name === match.team2.name,
                              )?.image || noImage}
                              alt={match.team2.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-gray-600">
                        <i className="fas fa-map-marker-alt text-lg mr-2"></i>
                        <span className="text-lg">{match.venue}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      case "awards":
        const currentAwards = awardsData[selectedSeason[0]];
        return (
          <div
            className={`pt-24 px-6 max-w-7xl mx-auto min-h-screen transition-opacity duration-300 ${isContentTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <div className="text-center mb-16 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 blur-2xl"></div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                League Awards
              </h2>
              <p className="text-gray-600 mt-6 text-lg">
                Celebrating Excellence in Square League {selectedSeason}
              </p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-1 transform hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-2xl">
                <div className="bg-white rounded-2xl p-8 h-full backdrop-blur-xl">
                  <div className="flex items-center gap-8">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 bg-yellow-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.champion.image}
                          alt={currentAwards.champion.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <i className="fas fa-trophy text-4xl text-yellow-500"></i>
                        <h3 className="text-3xl font-bold">League Champion</h3>
                      </div>
                      <h4 className="text-2xl font-semibold mb-2">
                        {currentAwards.champion.name + " (" + currentAwards.champion.record + ")"}
                      </h4>
                      <div className="flex gap-6">
                        <p className="text-gray-600 flex items-center">
                          <i className="fas fa-chart-line mr-2"></i>DPG: {currentAwards.champion.damageDone}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <i className="fas fa-chart-line mr-2"></i>PUPG: {currentAwards.champion.powerUps}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <i className="fas fa-chart-line mr-2"></i>WBPG: {currentAwards.champion.wallBounces}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-1 transform hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-2xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 bg-purple-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.mvp.image}
                          alt={currentAwards.mvp.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <i className="fas fa-star text-2xl text-purple-500"></i>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Most Valuable Square
                        </h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{currentAwards.mvp.name + " (" + currentAwards.mvp.record + ")"}</h4>
                      <div className="flex gap-6 mt-4">
                        <p className="text-gray-600 text-sm flex items-center px-3 py-2 bg-gray-50 rounded-lg">
                          <i className="fas fa-chart-pie mr-2 text-blue-500"></i>
                          DPG: {currentAwards.mvp.damageDone}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center px-3 py-2 bg-gray-50 rounded-lg">
                          <i className="fas fa-chart-pie mr-2 text-blue-500"></i>
                          PUPG: {currentAwards.mvp.powerUps}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center px-3 py-2 bg-gray-50 rounded-lg">
                          <i className="fas fa-chart-pie mr-2 text-blue-500"></i>
                          WBPG: {currentAwards.mvp.wallBounces}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-2xl p-1 transform hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-2xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 bg-green-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.rookie.image}
                          alt={currentAwards.rookie.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-award text-3xl text-green-500"></i>
                        <h3 className="text-2xl font-bold">
                          Rookie of the Year
                        </h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        {currentAwards.rookie.name + " (" + currentAwards.rookie.record + ")"}
                      </h4>
                      <div className="flex gap-4">
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-chart-bar mr-2"></i>DPG: {currentAwards.rookie.damageDone}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-running mr-2"></i>PUPG: {currentAwards.rookie.powerUps}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-running mr-2"></i>WBPG: {currentAwards.rookie.wallBounces}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fas fa-users text-3xl text-blue-500"></i>
                    <h3 className="text-2xl font-bold">All-Square Team</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {currentAwards.allSquareTeam
                      .map((player, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                        >
                          <div className="w-16 h-16 relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-3"></div>
                            <div className="absolute inset-0 bg-white rounded-xl">
                              <img
                                src={player.image}
                                alt={player.name}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{player.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 flex items-center">
                              <i className="fas fa-running mr-2"></i>
                              Season Record: {player.record}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 bg-red-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.mostAggressive.image}
                          alt={currentAwards.mostAggressive.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-fire text-3xl text-red-500"></i>
                        <h3 className="text-2xl font-bold">Most Aggressive</h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{currentAwards.mostAggressive.name}</h4>
                      <div className="flex gap-4">
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-bolt mr-2"></i>Damage Done: {currentAwards.mostAggressive.damageDone} ({currentAwards.mostAggressive.damageDonePerGame} dpg)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 bg-indigo-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.mostTactical.image}
                          alt={currentAwards.mostTactical.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-chess text-3xl text-indigo-500"></i>
                        <h3 className="text-2xl font-bold">Most Tactical</h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        {currentAwards.mostTactical.name}
                      </h4>
                      <div className="flex gap-4">
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-brain mr-2"></i>Power Ups: {currentAwards.mostTactical.powerUps} ({currentAwards.mostTactical.powerUpsPerGame} pupg)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 bg-amber-100 rounded-2xl rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl">
                        <img
                          src={currentAwards.mostNimble.image}
                          alt={currentAwards.mostNimble.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-wind text-3xl text-amber-500"></i>
                        <h3 className="text-2xl font-bold">Most Nimble</h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        {currentAwards.mostNimble.name}
                      </h4>
                      <div className="flex gap-4">
                        <p className="text-gray-600 text-sm flex items-center">
                          <i className="fas fa-tachometer-alt mr-2"></i>Wall Bounces: {currentAwards.mostNimble.wallBounces} ({currentAwards.mostNimble.wallBouncesPerGame} wbpg)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fas fa-medal text-3xl text-emerald-500"></i>
                    <h3 className="text-2xl font-bold">Single Game Highs</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    {currentAwards.singleGameHighs.map((record, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-600">
                            {record.category}
                          </span>
                          <span className="text-2xl font-bold text-emerald-600">
                            {record.value}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          <p className="font-medium">{record.square}</p>
                          <p>{record.week}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "donors":
        return (
          <div
            className={`pt-24 px-6 max-w-7xl mx-auto min-h-screen transition-opacity duration-300 ${isContentTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <h2 className="text-3xl font-bold mb-8">Our Generous Donors</h2>
            {renderDonors()}
          </div>
        );
      case "standings":
        return (
          <div
            className={`pt-24 px-6 max-w-7xl mx-auto min-h-screen transition-opacity duration-300 ${isContentTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <h2 className="text-3xl font-bold mb-8">League Standings</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Square
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Wins
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Losses
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Draws
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Win %
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Last 5
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...filterSquares()]
                    .sort((a, b) => {
                      if (b.wins !== a.wins) return b.wins - a.wins;
                      return a.losses - b.losses;
                    })
                    .map((square, index, array) => {
                      const winRate = (
                        (square.wins / (square.wins + square.losses)) *
                        100
                      ).toFixed(1);
                      // Generate random last 5 matches (W, L, D)
                      const last5 = Array(5)
                        .fill(null)
                        .map(() => {
                          const rand = Math.random();
                          return rand > 0.6 ? "W" : rand > 0.3 ? "L" : "D";
                        });
                      const isRelegationLine = array.length > 8 && index === array.length - 4;
                      const isPlayoffLine = array.length > 8 && index === 7;
                      return (
                        <tr
                          key={square.id}
                          onClick={() => {
                            setSelectedSquare(square.name);
                            setShowSquareProfile(true);
                          }}
                          className={`${isRelegationLine ? 'border-b-4 border-b-red-500 after:content-["Relegation"] after:absolute after:right-4 after:text-red-600 after:font-medium after:-bottom-1 relative' : isPlayoffLine ? 'border-b-4 border-b-green-500 after:content-["Playoffs"] after:absolute after:right-4 after:text-green-600 after:font-medium after:-bottom-1 relative' : "border-b border-gray-100"} hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${index === 0 ? "bg-yellow-50" : index === 1 ? "bg-gray-50" : index === 2 ? "bg-orange-50" : ""}`}
                        >
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${index === 0
                                ? "bg-yellow-100 text-yellow-800"
                                : index === 1
                                  ? "bg-gray-100 text-gray-800"
                                  : index === 2
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-blue-50 text-blue-800"
                                } font-semibold`}
                            >
                              {index + 1}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium">{square.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {square.wins}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {square.losses}
                          </td>
                          <td className="px-6 py-4 text-center">{square.draws}</td>
                          <td className="px-6 py-4 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full ${parseFloat(winRate) > 60
                                ? "bg-green-100 text-green-800"
                                : parseFloat(winRate) > 40
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-red-100 text-red-800"
                                } font-medium`}
                            >
                              {winRate}%
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center space-x-1">
                              {last5.map((result, i) => (
                                <span
                                  key={i}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${result === "W"
                                    ? "bg-green-100 text-green-800"
                                    : result === "L"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`pt-24 px-6 max-w-7xl mx-auto min-h-screen transition-opacity duration-300 ${isContentTransitioning ? "opacity-0" : "opacity-100"
              }`}
          >
            <section className="mb-20">
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/ef3d59f14cbb25481ae84402390f5f90.jpg"
                  alt="Square League Arena"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                  <div className="max-w-2xl ml-16 text-white">
                    <h1 className="text-5xl font-bold mb-6">
                      Welcome to Square League
                    </h1>
                    <p className="text-xl mb-8">
                      Watch high intensity battles between squares with the best community on YouTube
                    </p>
                    <a
                      href="https://www.youtube.com/@AllThingsShapes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 !rounded-button whitespace-nowrap"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Square League Overview
              </h2>
              <div className="grid grid-cols-2 gap-12">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-info-circle text-blue-600 mr-3"></i>
                    What is Square League?
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Square League is a highly competitive arena battle between
                      different colored squares. The battles have a variety of power
                      ups, gimmicks, arena obstacles and a variety of other interesting
                      match effects. The battles are mostly 1v1 but can be 2v2, 3v3 etc.
                    </p>
                    <p>
                      Matches are streamed live every Sunday on AllThingsShapes YouTube
                      channel. The league is all hand coded each week and specificly
                      tailored for viewer experience. Stats are tracked and awards
                      are given out accordingly.
                    </p>
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          Real-time physics-based gameplay
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          Live, never pre recorded battles
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          Advanced statistics tracking
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          Playoff and relegation system
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-book text-red-600 mr-3"></i>
                    Official Rules
                  </h3>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        League Format
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Squares battle to see who can be the last one standing
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Battles change each week depending on the gimmick
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Battle Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Squares deal one damage to each other on collisions
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Upon taking damage the squares shrink according to the amount of damage taken
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Squares have 50 lives per match and are only considered eliminated when that number reaches 0
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Power ups spawn throughout the match that have a variety of effects.
                          These can also change depending on match gimmick
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Rotating Power Ups
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Power ups change each week giving a variety of effects
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Other things like abilities to shoot lasers, neutral enemies and arena
                          hazards can appear in the battles
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Season Structure
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Every square plays each other once
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Top 8 teams qualify for playoffs
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-circle text-xs text-gray-400 mr-2"></i>
                          Bottom 4 teams enter a relegation tournament
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Meet the Squares
              </h2>
              <div className="grid grid-cols-3 gap-8">
                {filterSquares().map((square: Square) => (
                  <div
                    key={square.id}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="mb-4">
                      <img
                        src={square.image}
                        alt={square.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {square.name}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <i className="fas fa-trophy mr-2 text-yellow-500"></i>
                        Wins: {square.wins}
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-chart-bar mr-2 text-blue-500"></i>
                        Win Rate:{" "}
                        {(
                          (square.wins / (square.wins + square.losses)) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                      <button
                        onClick={() => {
                          setSelectedSquare(square.name);
                          setShowSquareProfile(true);
                        }}
                        className="mt-4 w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 !rounded-button whitespace-nowrap"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
      {showSquareProfile && renderSquareProfile()}
    </div>
  );
};
export default App;