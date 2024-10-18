# tjex.net

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css

deploy: 
	git checkout deploy
	git merge main
	make css
	yarn build
	git add -f dist src/styles
	git commit -m "build and deploy"
	git push origin deploy
	git checkout main

