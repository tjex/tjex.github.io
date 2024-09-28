# tjex.net

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css

deploy: 
	make css
	git add src/styles
	git commit -m "make css"
	git checkout -b deploy
	yarn build
	git add -f dist
	git commit -m "build and deploy"
	git push origin deploy
	git checkout -b main


