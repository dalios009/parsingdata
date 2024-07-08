# MianApp/management/commands/extract_applicants.py
from django.core.management.base import BaseCommand
from bs4 import BeautifulSoup
import requests
from MainApp.models import Condidate

class Command(BaseCommand):
    help = 'Scrape data from hh.ru for applicants'

    def handle(self, *args, **kwargs):
        url = "https://hh.ru/search/resume?text=english+teacher&area=1&isDefaultArea=true&ored_clusters=true&order_by=relevance&search_period=0&logic=normal&pos=full_text&exp_period=all_time&hhtmFrom=resume_search_result&hhtmFromLabel=resume_search_line"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }

        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            for condidate_div in soup.find_all('div', {'data-qa': 'resume-serp__resume'}):
                title = condidate_div.find('a', {'data-qa': 'serp-item__title'}).text.strip()
                age = condidate_div.find('span', {'data-qa': 'resume-serp__resume-age'}).text.strip() if condidate_div.find('span', {'data-qa': 'resume-serp__resume-age'}) else ''
               
                status = condidate_div.find('div', {'class': 'tag--vCYld4yoLU7RpJglYGnV tag_job-search-status-active--WAZ6Sx3vDygvcdzNm06h'}).text.strip() if condidate_div.find('div', {'class': 'tag--vCYld4yoLU7RpJglYGnV tag_job-search-status-active--WAZ6Sx3vDygvcdzNm06h'}) else ''
              
                # Save to database
                Condidate.objects.create(
                    title=title,
                    age=age,
                   
                    status=status,
                   
                )
            self.stdout.write(self.style.SUCCESS('Successfully scraped and stored applicants'))
        else:
            self.stdout.write(self.style.ERROR('Failed to retrieve the page'))
