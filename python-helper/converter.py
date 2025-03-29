import os
from os.path import join

file_path = join(os.path.dirname(os.path.abspath(__file__)), 'stats.txt')  # Replace with your file path
output_file_path = join(os.path.dirname(os.path.abspath(__file__)), 'stat-output.txt')

id = 1
with open(file_path, 'r') as file, open(output_file_path, 'w') as output_file:
    for line in file:
        split_line = line.split('\t')
        
        stat_str = '{ ' + f'id: {id}, color: \"{split_line[0]}\", name: \"{split_line[1]}\", wins: {split_line[2]}, losses: {split_line[3]}, draws: {split_line[4]}, power_ups: {split_line[5]}, damage_done: {split_line[6]}, wall_bounces: {split_line[7]}, image: \"{split_line[8].replace('\n', '')}\"' + ' },'
        output_file.write(stat_str + '\n')
        id += 1
        
file_path = join(os.path.dirname(os.path.abspath(__file__)), 'schedule.txt')
output_file_path = join(os.path.dirname(os.path.abspath(__file__)), 'schedule-output.txt')



with open(file_path, 'r') as file, open(output_file_path, 'w') as output_file:
    stat_str = '['
    matching_timings = ["6:00 PM CST", "6:10 PM CST", "6:15 PM CST", "6:20 PM CST", "6:25 PM CST", "6:30 PM CST", "6:35 PM CST", "6:40 PM CST", "6:45 PM CST", "6:50 PM CST"]
    match_index = 0
    for line in file:
        split_line = line.split('\t')
        split_line[3] = split_line[3].replace('\n', '')
        stat_str = stat_str + '{ ' + f'week: {split_line[1]}, date: "{split_line[0]}", time: "{matching_timings[match_index]}", team1: ' + '{ name: ' + f'"{split_line[2]}"' + ' }, team2: { name: ' + f'"{split_line[3]}"' + ' }, venue: "YouTube" },'
        match_index += 1
        if match_index >= len(matching_timings):
            match_index = 0
    
    stat_str = stat_str + ']'    
    output_file.write(stat_str + '\n')