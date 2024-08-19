import csv
import random
import schedule
import time

# Function to pull and print a random quote
def print_random_quote(csv_file_path):
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        reader = list(csv.reader(file))
        reader = reader[1:]  # Skip the header row
        quote_row = random.choice(reader)
        author = quote_row[0]
        quote = quote_row[1]
        print(f"{quote} - {author}")

# Schedule the function to run every 12 hours
csv_file_path = 'quotes.csv'
schedule.every(12).hours.do(print_random_quote, csv_file_path=csv_file_path)

# Keep the script running
while True:
    schedule.run_pending()
    time.sleep(1)
