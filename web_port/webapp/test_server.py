from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options=options)
driver.get("http://localhost:8000")
time.sleep(2)
for entry in driver.get_log('browser'):
    print(entry['message'])
driver.quit()
