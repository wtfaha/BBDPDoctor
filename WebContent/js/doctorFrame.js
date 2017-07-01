//prepend 框架(上方棕色navbar和左方灰色navbar)
$("div#wrapper").prepend(
"			<nav class='navbar navbar-default navbar-static-top' role='navigation' style='margin-bottom: 0'>" + "\n" + 
"				<div class='navbar-header'>" + "\n" + 
"					<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>" + "\n" + 
"						<span class='sr-only'>Toggle navigation</span>" + "\n" + 
"						<span class='icon-bar'></span>" + "\n" + 
"						<span class='icon-bar'></span>" + "\n" + 
"						<span class='icon-bar'></span>" + "\n" + 
"					</button>" + "\n" + 
"					<a class='navbar-brand' href='Homepage.html'>BBDP - Bridge Between Doctor and Patient</a>" + "\n" + 
"				</div>" + "\n" + 
"				<ul class='nav navbar-top-links navbar-right'>" + "\n" + 
"					<li class='dropdown'>" + "\n" + 
"						<a href='Homepage.html'>" + "\n" + 
"							<i class='fa fa-home fa-fw fa-lg' style='color: white;'></i>" + "\n" + 
"						</a>" + "\n" + 
"					</li>" + "\n" + 
"					<li class='dropdown'>" + "\n" + 
"						<a class='dropdown-toggle' data-toggle='dropdown' href='#'>" + "\n" + 
"							<i class='fa fa-bell fa-fw' style='color: white;'></i><i class='fa fa-caret-down' style='color: white;'></i>" + "\n" + 
"						</a>" + "\n" + 
"						<ul class='dropdown-menu notification-list'>" + "\n" + 
"							<li>" + "\n" + 
"								<a>" + "\n" + 
"									<div class='row'>" + "\n" + 
"										<div class='col-md-12 col-xs-12'>" + "\n" + 
"											<span class='pull-right'>" + "\n" + 
"												<i class='fa fa-trash-o'></i>" + "\n" + 
"												清除所有通知" + "\n" + 
"											</span>" + "\n" + 
"										</div>" + "\n" + 
"									</div>" + "\n" + 
"								</a>" + "\n" + 
"							</li>" + "\n" + 
"							<li class='divider'></li>" + "\n" + 
"							<li>" + "\n" + 
"								<a>" + "\n" + 
"									<div class='row'>" + "\n" + 
"										<div class='col-md-3 col-xs-3'>" + "\n" + 
"											<img src='img/frame/user.png' class='img-responsive' />" + "\n" + 
"										</div>" + "\n" + 
"										<div class='col-md-9 col-xs-9'>" + "\n" + 
"											<span class='pull-left'><b>診間推播</b></span>" + "\n" + 
"											<span class='pull-right text-muted'><small>2017-01-01 12:00</small></span><br>" + "\n" + 
"											<p style='margin-bottom: 0;'>王小明的診間推播</p>" + "\n" + 
"										</div>" + "\n" + 
"									</div>" + "\n" + 
"								</a>" + "\n" + 
"							</li>" + "\n" + 
"							<li class='divider'></li>" + "\n" + 
"							<li>" + "\n" + 
"								<a>" + "\n" + 
"									<div class='row'>" + "\n" + 
"										<div class='col-md-3 col-xs-3'>" + "\n" + 
"											<img src='img/frame/user.png' class='img-responsive' />" + "\n" + 
"										</div>" + "\n" + 
"										<div class='col-md-9 col-xs-9'>" + "\n" + 
"											<span class='pull-left'><b>診間推播</b></span>" + "\n" + 
"											<span class='pull-right text-muted'><small>2017-01-01 12:00</small></span><br>" + "\n" + 
"											<p style='margin-bottom: 0;'>王小明的診間推播</p>" + "\n" + 
"										</div>" + "\n" + 
"									</div>" + "\n" + 
"								</a>" + "\n" + 
"							</li>" + "\n" + 
"							<li class='divider'></li>" + "\n" + 
"							<li>" + "\n" + 
"								<a>" + "\n" + 
"									<div class='row'>" + "\n" + 
"										<div class='col-md-3 col-xs-3'>" + "\n" + 
"											<img src='img/frame/user.png' class='img-responsive' />" + "\n" + 
"										</div>" + "\n" + 
"										<div class='col-md-9 col-xs-9'>" + "\n" + 
"											<span class='pull-left'><b>診間推播</b></span>" + "\n" + 
"											<span class='pull-right text-muted'><small>2017-01-01 12:00</small></span><br>" + "\n" + 
"											<p style='margin-bottom: 0;'>王小明的診間推播</p>" + "\n" + 
"										</div>" + "\n" + 
"									</div>" + "\n" + 
"								</a>" + "\n" + 
"							</li>" + "\n" + 
"						</ul>" + "\n" + 
"					</li>" + "\n" + 
"					<li class='dropdown'>" + "\n" + 
"						<a class='dropdown-toggle' data-toggle='dropdown' href='#'>" + "\n" + 
"							<i class='fa fa-user fa-fw' style='color: white;'></i><i class='fa fa-caret-down' style='color: white;'></i>" + "\n" + 
"						</a>" + "\n" + 
"						<ul class='dropdown-menu'>" + "\n" + 
"							<li><a href='AccountSetting.html'><i class='fa fa-gear fa-fw'></i>帳戶設定</a></li>" + "\n" + 
"							<li class='divider'></li>" + "\n" + 
"							<li><a href='login.html'><i class='fa fa-sign-out fa-fw'></i>登出</a></li>" + "\n" + 
"						</ul>" + "\n" + 
"					</li>" + "\n" + 
"				</ul>" + "\n" + 
"				<div class='navbar-default2 sidebar' role='navigation'>" + "\n" + 
"					<div class='sidebar-nav navbar-collapse'>" + "\n" + 
"						<ul class='nav' id='side-menu'>" + "\n" + 
"							<li class='sidebar-search'>" + "\n" + 
"								<div style='margin-bottom: 2vh'>" + "\n" + 
"									<b>病患資訊</b>" + "\n" + 
"								</div>" + "\n" + 
"								<div class='input-group custom-search-form'>" + "\n" + 
"									<input type='text' class='form-control' placeholder='身份證後五碼'>" + "\n" + 
"									<span class='input-group-btn'>" + "\n" + 
"										<button class='btn btn-default' type='button'data-toggle='modal' data-target='#searchModal' id='pateintSearch'>" + "\n" + 
"											<i class='fa fa-search'></i>" + "\n" + 
"										</button>" + "\n" + 
"									</span>" + "\n" + 
"								</div>" + "\n" + 
"							</li>" + "\n" + 
"							<li>" + "\n" + 
"								<a href='#' style='color: #2e2d4d;'><b>資訊平台</b><span class='fa arrow'></span></a>" + "\n" + 
"								<ul class='nav nav-second-level'>" + "\n" + 
"									<li>" + "\n" + 
"										<a href='PatientInstruction.html' style='color: #2e2d4d;'><b>衛教資訊</b></a>" + "\n" + 
"									</li>" + "\n" + 
"									<li>" + "\n" + 
"										<a href='ClinicHours.html' style='color: #2e2d4d;'><b>門診資訊</b></a>" + "\n" + 
"									</li>" + "\n" + 
"								</ul>" + "\n" + 
"							</li>" + "\n" + 
"							<li>" + "\n" + 
"								<a href='#' style='color: #2e2d4d;'><b>問卷區</b><span class='fa arrow'></span></a>" + "\n" + 
"								<ul class='nav nav-second-level'>" + "\n" + 
"									<li>" + "\n" + 
"										<a href='QuestionnaireModule.html' style='color: #2e2d4d;'><b>問卷模板</b></a>" + "\n" + 
"									</li>" + "\n" + 
"									<li>" + "\n" + 
"										<a href='QuestionnairePool.html' style='color: #2e2d4d;'><b>問卷題庫</b></a>" + "\n" + 
"									</li>" + "\n" + 
"									<li>" + "\n" + 
"										<a href='QuestionnaireTempStorage.html' style='color: #2e2d4d;'><b>題目暫存區</b></a>" + "\n" + 
"									</li>" + "\n" + 
"								</ul>" + "\n" + 
"							</li>" + "\n" + 
"							<li>" + "\n" + 
"								<a href='HealthTracking.html' style='color: #2e2d4d;'><b>健康狀況追蹤模板</b></a>" + "\n" + 
"							</li>" + "\n" + 
"							<li>" + "\n" + 
"								<a href='Notice.html' style='color: #2e2d4d;'><b>注意事項</b></a>" + "\n" + 
"							</li>" + "\n" + 
"						</ul>" + "\n" + 
"					</div>" + "\n" + 
"				</div>" + "\n" + 
"			</nav>" + "\n"
);

//可以在這裡引用各種js
$(document).ready(function() {
	/*$.getScript("js/notification.js");*/
	
});