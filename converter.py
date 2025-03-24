file_path = 'stats.txt'  # Replace with your file path
output_file_path = 'stat-output.txt'

id = 1
with open(file_path, 'r') as file, open(output_file_path, 'w') as output_file:
    for line in file:
        split_line = line.split('\t')
        
        stat_str = '{ ' + f'id: {id}, color: \"{split_line[0]}\", name: \"{split_line[1]}\", wins: {split_line[2]}, losses: {split_line[3]}, draws: {split_line[4]}, power_ups: {split_line[5]}, damage_done: {split_line[6]}, wall_bounces: {split_line[7]}, image: \"{split_line[8].replace('\n', '')}\"' + ' },'
        output_file.write(stat_str + '\n')
        id += 1