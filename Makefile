# tjex.net

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css

deploy: 
	yarn run build
	git checkout deploy
	git add -f dist
	git commit -m "deploy from Makefile"
	git push origin deploy
	git checkout main

