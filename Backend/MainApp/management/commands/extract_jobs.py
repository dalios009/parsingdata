# Adjusted script with additional debugging output
from django.core.management.base import BaseCommand
from bs4 import BeautifulSoup
import requests
from MainApp.models import Job

class Command(BaseCommand):
    help = 'Scrape data from hh.ru for vacancies'

    def handle(self, *args, **kwargs):
        url = "https://hh.ru/jobs/english_teacher"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }

        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            for vacancy_div in soup.find_all('div', {'class': 'job-search-item__card'}):
                title_elem = job_div.find('span', {'class': 'job-name--c1Lay3KouCl7XasYakLk'})
                title = title_elem.text.strip() if title_elem else 'N/A'
                
                employer_elem = job_div.find('span', {'class': 'company-info-text--vgvZouLtf8jwBmaD1xgp'})
                employer = employer_elem.text.strip() if employer_elem else 'N/A'
                
            
                
                
                location_elem = job_div.find('span', {'class': 'fake-magritte-primary-text--Hdw8FvkOzzOcoR4xXWni'})
                location = location_elem.text.strip() if location_elem else 'N/A'
                
               
                # Save to database
                Job.objects.create(
                    title=title,
                    employer=employer,

                    location=location,
                  
                )

                # Output for debugging
                self.stdout.write(self.style.SUCCESS(f'Title: {title}, Employer: {employer},Location: {location}, Link: {link}'))
            
            self.stdout.write(self.style.SUCCESS('Successfully scraped and stored jobs'))
        else:
            self.stdout.write(self.style.ERROR('Failed to retrieve the page'))

